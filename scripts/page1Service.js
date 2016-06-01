(function(){
    angular.module('page1')
    .service('page1Service',['$q',Page1Service]);

    function Page1Service($q){
        var page1=[
        {
            name :'Test1',
            avatar :'avatar-1.svg',
            content : 'Premier Test'
        },
        {
            name :'Test2',
            avatar :'avatar-1.svg',
            content : 'Deuxieme Test'
        },
        {
            name :'Test3',
            avatar :'avatar-1.svg',
            content : 'Troisieme Test'
        }
        ];
        return {
            loadAllPage1 : function(){
                return $q.when(page1);
            }
        };
    }
})();