require 'sinatra'
require 'shotgun'
require 'rest-client'

get '/' do
  erb :index
end