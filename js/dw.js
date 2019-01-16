mui.init();

	mui.plusReady(function() {
		getGeocode();
	})
	
	//通过定位模块获取位置信息
	function getGeocode() {
		plus.geolocation.getCurrentPosition(geoInf, function(e) {
			outSet("获取定位位置信息失败：" + e.message);
		}, {
			geocode: true
		});
	}
	 
	function geoInf(position) {
		localStorage.setItem("coordsType", position.coordsType); //类型
		localStorage.setItem("country", position.address.country); //全国
		localStorage.setItem("province", position.address.province); //省份
		localStorage.setItem("city", position.address.city); //市
		localStorage.setItem("district", position.address.district); //区县
		localStorage.setItem("street", position.address.street); //路
		localStorage.setItem("streetNum", position.address.streetNum); //号
		localStorage.setItem("poiName", position.address.poiName); //附近商户
		localStorage.setItem("cityCode", position.address.cityCode); //电话区号
		localStorage.setItem("addresses", position.addresses); //详细地址
		localStorage.setItem("longitude", position.coords.longitude); //精度
		localStorage.setItem("latitude", position.coords.latitude); //维度
		localStorage.setItem("timestamp", position.timestamp); //时间
		localStorage.setItem("Provinces",position.address.province+''+position.address.city+''+position.address.district)//省市县
		var coordsType = localStorage.getItem("coordsType"); //类型
		var country = localStorage.getItem("country"); //全国
		var province = localStorage.getItem("province"); //省份
		var city = localStorage.getItem("city"); //市
		var district = localStorage.getItem("district"); //区县
		var street = localStorage.getItem("street"); //路
		var streetNum = localStorage.getItem("streetNum"); //号
		var poiName = localStorage.getItem("poiName"); //附近商户
		var cityCode = localStorage.getItem("cityCode"); //电话区号
		var addresses = localStorage.getItem("addresses"); //详细地址
		var longitude = localStorage.getItem("longitude"); //精度
		var latitude = localStorage.getItem("latitude"); //维度
		var timestamp = localStorage.getItem("timestamp"); //时间
		var Provinces=localStorage.getItem("Provinces");//省市县
	}