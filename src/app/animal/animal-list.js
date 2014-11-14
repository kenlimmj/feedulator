'use strict';

angular.module('app.animal-list', [
        'ui.router',
        'xc.indexedDB'
    ])
    .config(function config($stateProvider) {
        $stateProvider.state('animal-list', {
            url: '/animals/list',
            views: {
                "main": {
                    controller: 'AnimalListCtrl',
                    templateUrl: 'app/animal/animal-list.tpl.html'
                }
            },
            data: {
                pageTitle: 'Animals'
            }
        });
    })
    .controller('AnimalListCtrl', function AnimalListController($scope, $state, $indexedDB, lodash) {
        var animalStore = $indexedDB.objectStore('animals')

        animalStore.getAll().then(function(results) {
            $scope.animalData = results;
        });

        $scope.deleteAnimal = function(animalId) {
            animalStore.delete(animalId).then(function() {
                Messenger().post("Successfully deleted animal");

                $scope.animalData = lodash.reject($scope.animalData, { _id: animalId });
            });
        }

        $(':checkbox').radiocheck();
    });
