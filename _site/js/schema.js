{
    "types": {
        "Item": {
            "label": "bot-related thing",
            "pluralLabel": "bot-related things"
        },
        "bot": {
            "label": "bot",
            "pluralLabel": "bots"
        },
        "botally": {
            "label": "botALLY",
            "pluralLabel": "botALLIES"
        },
        "botmedia": {
            "label": "work concerning bots",
            "pluralLabel": "works concerning bots"
        },
        "botmaterials": {
            "label": "bot component",
            "pluralLabel": "bot components"
        }
    },
    "properties": {
        "id": {
            "valueType": "number"
        },
        "url": {
            "valueType": "url"
        },
        "presidency": {
            "valueType":              "item"
        },
        "term": {
            "valueType":              "number"
        },
        "inDate": {
            "valueType":              "date",
            "label":                  "in office"
        },
        "outDate": {
            "valueType":              "date",
            "label":                  "out office"
        },
        "birth": {
            "valueType":              "date"
        },
        "death": {
            "valueType":              "date"
        },
        "creators": {
            "valueType":"botally"
        },
        "followers_count": {
            "valueType":"number",
            "label": "follower",
            "pluralLabel": "followers"
        },
		"createdBy": {
        	"label":        "created by",
            "reverseLabel": "creator of",
			"valueType":    "item"
	   },
	   "citedIn": {
		   "label":        "cited in",
		   "reverseLabel": "cites",
		   "valueType":    "item"
	   },
	   "madeWith": {
		   "label":        "made with",
		   "reverseLabel": "used to make",
		   "valueType":    "item"
	   },
        "example": { 
            "label":                  "author", 
            "pluralLabel":            "authors", 
            "reverseLabel":           "author of", 
            "reversePluralLabel":     "authors of", 
            "groupingLabel":          "their authors", 
            "reverseGroupingLabel":   "their work" 
        }
    }
}