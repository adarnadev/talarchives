# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	collections:
        pages: ->
            @getCollection("html").findAllLive({isPage:true})
        posts: ->
        	@getCollection("html").findAllLive({isPost:true})
        featured: ->
        	@getCollection("html").findAllLive({isFeat:true})

}

# Export the DocPad Configuration
module.exports = docpadConfig