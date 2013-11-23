require 'sinatra'
require 'shotgun'
require 'rest-client'

get '/' do
  gtr_root = "http://gtr.rcuk.ac.uk:80/gtr/api/"
  api_response = RestClient.get(gtr_root + "projects?size=120", :accept => 'application/vnd.rcuk.gtr.json-v1')
  p JSON.parse(api_response)
  erb :index
end