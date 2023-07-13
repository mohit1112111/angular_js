app.service('NewsService', function ($http) {
    this.getTopHeadlines = function () {
        var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f175800b52e847a6abd0434e97c9a512';
        return $http.get(url);
    }


    this.getNewsByCategory = function (category) {
        var url = 'https://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=f175800b52e847a6abd0434e97c9a512';
        return $http.get(url);
    };

    this.searchNewsByCountry = function (country) {
        var url = 'https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=f175800b52e847a6abd0434e97c9a512';
        return $http.get(url);
    };
    
});
