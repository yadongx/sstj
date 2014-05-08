angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.top10= [
        {en:"cnm",title:"草泥马",desc:"神兽之首，拥有哀怨的眼神"},
        {en:"fky",title:"法克鱿",desc:"代表了力量、灵性与权威"},
        {en:"ymd",title:"雅蔑蝶",desc:"最美丽的生物，需要极力保护"},
        {en:"jhc",title:"菊花蚕",desc:"最小的生物，因生长处得名"},
        {en:"dfj",title:"达菲鸡",desc:"生活在鸡苑很多年，后来来到马勒戈壁"},
        {en:"jbm",title:"吉跋猫",desc:"动物协会，保护吉跋猫"},
        {en:"qlx",title:"潜烈蟹",desc:"因朝尼族食物稀缺也搬到了马勒戈壁"},
        {en:"wsj",title:"尾申鲸",desc:"最大的神兽，嗜血、喜血"},
        {en:"ydy",title:"吟稻雁",desc:"从遥远的福沿街飞到马勒戈壁的鸟类"},
    ];

})
.controller('DashDetailCtrl', function($scope, $stateParams, Friends) {
    (adsbygoogle = window.adsbygoogle || []).push({});
})
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
