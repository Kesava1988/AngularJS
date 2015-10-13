/**
 * Created by kesava on 10/11/2015.
 */

(function()
{
    'use strict';

    //Declare module
    angular.module('moduleName',[]);

    //Declare controller in module in which you want
    angular.module('moduleName').controller('controllerName',controllerNameFunctionName);

    //Define controller
    function controllerNameFunctionName()
    {
        this.var1 = "...";
        this.var2 = "...";
        var var3 = "...";
    }

})();