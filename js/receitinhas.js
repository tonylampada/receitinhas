angular.module('receitinhas', []);

angular.module('receitinhas').directive('receitinhas', function(){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/receitinhas.html',
        controller: function($scope, ReceitinhasModel){
            $scope.m = ReceitinhasModel;
        }
    };
});

angular.module('receitinhas').factory('ReceitinhasModel', function(ReceitasBD){
    var m = {
        receita_selected: null,
        receitas: ReceitasBD,
        select: select,
        back2list: back2list,
    };
    return m;

    function select(receita){
        m.receita_selected = receita;
    }

    function back2list(){
        m.receita_selected = null;
    }

});

angular.module('receitinhas').factory('ReceitasBD', function(){
    return [
        {
            nome: 'Torta de maçã',
            tempo: '2h'
        },
        {
            nome: 'Filé Cubana',
            tempo: '3h'
        },
    ];
});
