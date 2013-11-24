require 'sinatra'
require 'shotgun'
require 'rest-client'
require 'pp'
require 'geocoder'

#    for each project, get its organisation
#     for each organisation, get its postcode
#       then plot the postcode on the map, and it should display every project's location on the map (with clustering)

before do
  def recursive_symbolize_keys(h)
    case h
    when Hash
      Hash[
        h.map do |k, v|
          [ k.respond_to?(:to_sym) ? k.to_sym : k, recursive_symbolize_keys(v) ]
        end
      ]
    when Enumerable
      h.map { |v| recursive_symbolize_keys(v) }
    else
      h
    end
  end
end

get '/' do

  @org_postcodes = Array.new()
  gtr_root = "http://gtr.rcuk.ac.uk:80/gtr/api"
  api_response = RestClient.get(gtr_root + "/projects?s=100", :accept => 'application/vnd.rcuk.gtr.json-v1')
  projects = JSON.parse(api_response)
  projects = recursive_symbolize_keys(projects)

  projects[:project].each do |i|
    i[:links][:link].each do |j|
      if j[:rel] == "LEAD_ORG"
      @org_url = j[:href]
      end
    end

    api_response = RestClient.get(@org_url, :accept => 'application/vnd.rcuk.gtr.json-v1')
    @org = JSON.parse(api_response)
    @org = recursive_symbolize_keys(@org)
    @org_postcodes.push(@org[:addresses][:address][0][:postCode])
  end
  pp @org_postcodes
  @org_postcodes.each do |k|
    @latlng = Geocoder.coordinates(k)
    pp @latlng
  end

  erb :index
end