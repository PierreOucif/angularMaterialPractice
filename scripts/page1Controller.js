(function(){
    angular
        .module('page1')
        .controller('Page1Controller',[
        'page1Service','$mdSidenav','$mdBottomSheet','$log',
        Page1Controller
        ]);

    function Page1Controller(page1Service){
        var self = this;
        this.selected =null;
        this.page1=[];
        this.selectPage1=selectPage1;

        page1Service.loadAllPage1().then(function(page1){
            self.page1 = [].concat(page1);
            self.selected = page1[0];
        });

        function selectPage1(page1){
            self.selected=page1;
        }
    }

})();