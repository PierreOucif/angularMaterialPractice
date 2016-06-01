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
    
    function makeContact(selectedPage1) {

        $mdBottomSheet.show({
          controllerAs  : "vm",
          templateUrl   : './view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Page1 ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.page1 = selectedPage1;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'images/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'images/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'images/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'images/hangouts.svg'}
          ];
          this.contactPage1 = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

})();