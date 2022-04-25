import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Image, TextInput, Picker, ScrollView, TouchableHighlight,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { List, ListItem,Divider, Avatar, Icon } from 'react-native-elements';

function HomeScreen() {
  return (
  	<View>
  		<ScrollView>
	    <View style={{flexDirection:'column',justifyContent:'space-between',backgroundColor:'#FFF'}}>
				<View style={stylus.jumboTron}>
					<ImageBackground source={{uri:'https://media.istockphoto.com/photos/rice-fields-on-terraced-of-mu-cang-chai-yenbai-rice-fields-prepare-picture-id694050758?k=6&m=694050758&s=612x612&w=0&h=r3hq7fbtqvpKSnQDlDcgpOApVBY4vpM3b5JhxP4FVcs='}} style={{flex:1,paddingTop:5}} >
						<Image
						source={require("./kjlogo.png")}
						style={{borderRadius:50,width:50,height:50,alignSelf:'center',}}
						/>
						<View style={{flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}} >
							<View style={{margin:5}} >
								<Text style={{fontSize:18,fontWeight:'bold'}}>Mohammad Zaky</Text>
							</View>
							<View style={{flexDirection:'row',marginTop:50}} >
								<TouchableOpacity style={stylus.inputView}>
									<Icon name="search" type='font-awesome-5' size={15} /><Text style={{color:'#888',marginLeft:8,fontWeight:'bold'}}>Mau kemana hari ini?</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ImageBackground>
				</View>
				<Text style={{marginTop:10,textAlign:'center'}} >Zona Pemilik</Text>
	      <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingTop:10,paddingBottom:20}}>
	        <View style={{flexDirection:'column',alignItems:'center'}}>
	          <TouchableOpacity 
	            // onPress = {()=>this.props.navigation.navigate('Penyewa')}
	            style={stylus.touchHome}>
	            <Icon style={{alignItems:'center',textAlign:'center',color:'white'}} name="file-invoice-dollar" type='font-awesome-5' size={20} />
	          </TouchableOpacity>
	          <Text>Tagihan</Text>
	        </View>
	        <View style={{flexDirection:'column',alignItems:'center'}}>
	          <TouchableOpacity style={stylus.touchHome}>
	            <Icon style={{alignItems:'center',textAlign:'center',color:'white'}} name="paper-plane" type='font-awesome-5' size={20} />
	          </TouchableOpacity>
	          <Text>Kirim Bukti</Text>
	        </View>
	        <View style={{flexDirection:'column',alignItems:'center'}}>
	          <TouchableOpacity 
	          // onPress={()=>this.props.navigation.navigate('Order')}
	          style={stylus.touchHome}>
	            <Icon style={{alignItems:'center',textAlign:'center',color:'white'}} name="cart-plus" type='font-awesome-5' size={20} />
	          </TouchableOpacity>
	          <Text>Order</Text>
	        </View>
	      </View>
	      <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:20}}>
		      <View style={{flexDirection:'column',alignItems:'center'}}>
		          <TouchableOpacity 
		          // onPress={()=>this.props.navigation.navigate('Order')}
		          style={stylus.touchHome}>
		            <Icon style={{alignItems:'center',textAlign:'center',color:'white'}} name="pencil-ruler" type='font-awesome-5' size={20} />
		          </TouchableOpacity>
		          <Text>JosTukang</Text>
		        </View>
	    		<View style={{flexDirection:'column',alignItems:'center'}}>
	          <TouchableOpacity 
	          // onPress={()=>this.props.navigation.navigate('Order')}
	          style={stylus.touchHome}>
	            <Icon style={{alignItems:'center',textAlign:'center',color:'white'}} name="chair" type='font-awesome-5' size={20} />
	          </TouchableOpacity>
	          <Text>JosFurniture</Text>
	        </View>
		      <View style={{flexDirection:'column',alignItems:'center'}}>
	          <TouchableOpacity 
	          // onPress={()=>this.props.navigation.navigate('Order')}
	          style={stylus.touchHome}>
	            <Icon style={{alignItems:'center',textAlign:'center',color:'white'}} name="shipping-fast" type='font-awesome-5' size={20} />
	          </TouchableOpacity>
	          <Text>JosAngkut</Text>
	        </View>
	      </View>
	    </View>
	    <View>
	   		<Text style={{fontWeight:'bold',marginTop:15,marginBottom:10,marginLeft:15,fontSize:20 }}>Destinasi pilihan untukmu</Text>
	    	<ScrollView horizontal={true}showsHorizontalScrollIndicator={false}>
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
		        <View style={stylus.kota1}>
		          <View>
		            <Image
		              source={require("./kjlogo.png")}
		              style={{
		                height: 120,
		                width: 170
		              }}
		            />
		          </View>
		          <View style={{ padding: 20, width: 155 }}>
		            <Text style={{fontSize:18,fontWeight:'bold',color:'#FFF'}} >Malang</Text>
		          </View>
		        </View>
		      </View>
		      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		        <View style={stylus.kota4}>
		          <View>
		            <Image
		              source={require("./kjlogo.png")}
		              style={{
		                height: 120,
		                width: 170
		              }}
		            />
		          </View>
		          <View style={{ padding: 20, width: 155 }}>
		            <Text style={{fontSize:18,fontWeight:'bold',color:'#FFF'}} >Surabaya</Text>
		          </View>
		        </View>
		      </View>
		      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		        <View style={stylus.kota2}>
		          <View>
		            <Image
		              source={require("./kjlogo.png")}
		              style={{
		                height: 120,
		                width: 170
		              }}
		            />
		          </View>
		          <View style={{ padding: 20, width: 155 }}>
		            <Text style={{fontSize:18,fontWeight:'bold',color:'#FFF'}} >Jakarta</Text>
		          </View>
		        </View>
		      </View>
		      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		        <View style={stylus.kota3}>
		          <View>
		            <Image
		              source={require("./kjlogo.png")}
		              style={{
		                height: 120,
		                width: 170
		              }}
		            />
		          </View>
		          <View style={{ padding: 20, width: 155 }}>
		            <Text style={{fontSize:18,fontWeight:'bold',color:'#FFF'}} >Yogyakarta</Text>
		          </View>
		        </View>
		      </View>
	      </ScrollView>
	    </View>
	    <View style={stylus.jumboTron2}>
	    	<ImageBackground source={{uri:'https://media.istockphoto.com/photos/rice-fields-on-terraced-of-mu-cang-chai-yenbai-rice-fields-prepare-picture-id694050758?k=6&m=694050758&s=612x612&w=0&h=r3hq7fbtqvpKSnQDlDcgpOApVBY4vpM3b5JhxP4FVcs='}} style={{flex:1,paddingTop:5}} >
	    	<View style={{padding:20}}>
		    	<Text style={{fontSize:20,fontWeight:'bold',color:'#FFF'}}>
		    		Service pilihan untukmu
		    	</Text>
		    </View>
		    <TouchableOpacity style={{flex:1}}>
		    	<Text>Do</Text>
		    </TouchableOpacity>
	    	</ImageBackground>
	    </View>
	    </ScrollView>
    </View>
  );
}

function SrchScreen(){
	return (
<View style={stylus.container}>
          <View style={stylus.textInputView}>
            <Ionicons style={{padding: 10,}} name="ios-search" size={20} color="#000"/>
            <TextInput
              style={{flex:1,paddingLeft:5,paddingRight:5,height:50,fontSize:20,alignSelf:'stretch'}}
              placeholder='Cari Hunian'
              underlineColorAndroid='#FFF'
              returnKeyType='go'
            />
          </View>
          <View style={stylus.rowView}>
            <TouchableOpacity 
            style={{padding:10,marginLeft:5,borderWidth:1,borderColor:'tomato',borderRadius:12,}}>
              {<Text>Pilih Tanggal</Text>}
            </TouchableOpacity>
            <Picker
              label="Tipe"
              style={{marginLeft:5, width:180,alignSelf: 'center',height:50}}
              // selectedValue={this.state.selectPick1}
              onValueChange={(itemValue, itemIndex) => this.setState({selectPick1: itemValue})}>
              <Picker.Item label="Kost" value="kost" />
              <Picker.Item label="Rumah" value="rumah" />
              <Picker.Item label="Hunian Liburan" value="liburan" />
            </Picker>
          </View>
        <View style={stylus.container}>
        </View>
      </View>
	)
}

function SettingsScreen() {
	const settingList =[
    {
      judul : 'Notifikasi',
      icon : 'bell',
      subtitle:'Kelola notifikasi dan temukan pemberitahuan baru untuk hunian anda'
    },
    {
      judul : 'Cara Pembayaran',
      icon : 'money',
      subtitle:'Pelajari metode pembayaran yang tersedia pada aplikasi KosJos'
    },
    {
      judul : 'Iklankan Hunian Anda',
      icon : 'bullhorn',
      subtitle:'Beriklan agar semakin banyak yang tau hunian anda sedang tersedia'
    },
    {
      judul : 'Ketentuan Pemilik & Penyewa',
      icon : 'info-circle',
      subtitle:'Pelajari ketentuan dasar bagi para calon penyewa dan juga pemilik hunian'
    },
    {
      judul : 'Rekomendasikan Pemilik Hunian',
      icon : 'user-o',
      subtitle:'Rekomendasikan teman untuk menggunakan KosJos dan dapatkan uang tunai'
    },
  ]
	return (
		<View style={stylus.container}>
			<ScrollView>
	    <TouchableOpacity style={stylus.profName}>
        <Image 
          source={require("./kjlogo.png")}
          style={{borderRadius:50,width:80,height:80}}
        />
        <View style={{flexDirection:'column'}} >
          <Text style={{textAlign:'right',marginBottom:10,fontWeight:'bold',fontSize:24}} >Mohammad Zaky</Text>
          <Text>Lihat dan edit profil</Text>
        </View>
      </TouchableOpacity>
      <View style={stylus.barCon}>
	      <ScrollView height={200}horizontal={true}showsHorizontalScrollIndicator={false}>
	      	<View style={stylus.subBar}>
		      	<Icon
							name='receipt'
							type='font-awesome-5'
							color='#458cff'
							size={20}
						/>
						<View style={stylus.textStyle}>
		        	<Text style={{textAlign:'center'}}>Lihat riwayat pembayaran</Text>
		        </View>
		        <TouchableOpacity style={stylus.touchStyle}>
		        	<Text style={{color:'#0064b7'}}>CEK</Text>
		        </TouchableOpacity>
		      </View>
		      <View style={stylus.subBar}>
		        <Icon
							name='user-check'
							type='font-awesome-5'
							color='#458cff'
							size={20}
						/>
						<View style={stylus.textStyle}>
							<Text style={{textAlign:'center'}}>Verifikasi nomor ponselmu</Text>
						</View>
						<TouchableOpacity style={stylus.touchStyle}>
		        	<Text style={{color:'#0064b7'}}>LAKUKAN</Text>
		        </TouchableOpacity>
		      </View>
		      <View style={stylus.subBar}>
						<Icon
							name='award'
							type='font-awesome-5'
							color='#458cff'
							size={20}
						/>
						<View style={stylus.textStyle}>
							<Text style={{textAlign:'center'}}>Lihat dan tukar kos poinmu</Text>
						</View>
						<TouchableOpacity style={stylus.touchStyle}>
		        	<Text style={{color:'#0064b7'}}>LIHAT</Text>
		        </TouchableOpacity>
		      </View>
	      </ScrollView>
      </View>
      <View style={{backgroundColor:'#EEE',flex:1, marginTop:10}}>
      	<TouchableOpacity style={stylus.subBut}>
						<Text>Cek Status Vaksinasimu</Text>
						<Icon
							name='chevron-circle-right'
							type='font-awesome-5'
							color='#458cff'
							size={15}
						/>
		    </TouchableOpacity>
      {
				settingList.map((item, i) => (
					<TouchableHighlight>
			      <ListItem key={i} bottomDivider>
			        <Icon type='font-awesome' name={item.icon} />
			        <ListItem.Content>
			          <ListItem.Title>{item.judul}</ListItem.Title>
			          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
			        </ListItem.Content>
			        <ListItem.Chevron/>
			      </ListItem>
			    </TouchableHighlight>
			    ))
				}
				<View>
					<ListItem style={{marginTop:38}} bottomDivider>
						<Icon type='font-awesome-5' name={'cog'} />
					  <ListItem.Content>
					    <ListItem.Title>{'Pengaturan'}</ListItem.Title>
					  </ListItem.Content>
				  	<ListItem.Chevron/>
			  	</ListItem>
			  	<ListItem style={{marginBottom:20}}>
						<Icon type='font-awesome-5' name={'life-ring'} />
					  <ListItem.Content>
					    <ListItem.Title>{'Pusat Bantuan'}</ListItem.Title>
					  </ListItem.Content>
				  	<ListItem.Chevron/>
			  	</ListItem>
			  	<ListItem style={{marginTop:18,marginBottom:32}}>
					  <Icon name={'power-settings-new'} />
					  <ListItem.Content>
					    <ListItem.Title>{'Keluar'}</ListItem.Title>
					  </ListItem.Content>
					</ListItem>
				</View>
			</View>
			</ScrollView>
		</View>
	)
}

const Tab = createBottomTabNavigator();

	export default function App() {
	return (
	<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === 'Home') {
					iconName = focused
					? 'ios-home'
					: 'ios-home-outline';
				} 
				else if (route.name === 'Search') {
					iconName = focused ? 'search' : 'search-outline';
				}
				else if (route.name === 'Settings') {
					iconName = focused ? 'settings' : 'settings-outline';
				}

				// You can return any component that you like here!
				return <Ionicons name={iconName} size={size} color={color} />;
				},
					tabBarActiveTintColor: 'tomato',
					tabBarInactiveTintColor: 'gray',
				})}
			>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Search" component={SrchScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	</NavigationContainer>
	);
	}
	const stylus = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'#FFF',
  },
  chatContainer:{
    flex:1,
    justifyContent:'center',
  },
    stackContainer:{
    flex:1,
    justifyContent:'flex-start',
  },
  barCon:{
  	flex:1,
  	flexDirection:'column',
  	backgroundColor:'#FFF'
  },
  subBar:{
    padding:10,
    margin:15,
    backgroundColor:"#FFF",
    elevation:5,
    borderRadius:5,
    width:170,
  },
  kota1:{
  	overflow:'hidden',
    margin:15,
    elevation:5,
    borderRadius:5,
    width:170,
    backgroundColor:'#0D8ADB'
  },
  kota2:{
  	overflow:'hidden',
    margin:15,
    elevation:5,
    borderRadius:5,
    width:170,
    backgroundColor:'#58B1EA'
  },
  kota3:{
  	overflow:'hidden',
    margin:15,
    elevation:5,
    borderRadius:5,
    width:170,
    backgroundColor:'#85C6F0'
  },
  kota4:{
  	overflow:'hidden',
    margin:15,
    elevation:5,
    borderRadius:5,
    width:170,
    backgroundColor:'#339EE4'
  },
  subBut:{
    padding:14,
    marginTop:10,
    marginBottom:12,
    marginRight:15,
    marginLeft:15,
    backgroundColor:"#FFF",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    elevation:5,
    borderRadius:5,
  },
  profName:{
    padding:12,
    justifyContent:'space-between',
    marginTop:12,
    marginBottom:10,
    marginRight:18,
    marginLeft:18,
    backgroundColor:"#FFF",
    alignItems:'center',
    flexDirection:'row',
    elevation:5,
    borderRadius :5
  },
  textStyle:{
  	flex:1,
  	justifyContent:'center',
  	alignItems:'center'
  },
  touchStyle:{
  	justifyContent:'center',
  	alignItems:'center',
  	backgroundColor:'#ffea00',
  	borderRadius:25,
  	padding:6,
  	marginLeft:15,
  	marginRight:15
  },
  textInputView:{
    margin:8,
    padding:2,
    flexDirection:'row',
    alignItems:'center',
    overflow:'hidden',
    elevation:1,
  },
  inputView:{
  	borderRadius:20,
  	flexDirection:'row',
  	justifyContent:'center',
  	padding:12,
  	alignItems:'center',
  	flex:1,
  	marginLeft:20,
  	marginRight:20,
  	backgroundColor:'#FFF'
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center',
    overflow:'hidden',
  },
  jumboTron:{
    height:300,
  },
  jumboTron2:{
    height:350,
    marginTop:15,
    marginBottom:25
  },
  touchHome:{
  	width:52,
  	height:52,
  	alignItems:'center',
  	justifyContent:'center',
    padding:10,
    margin:10,
    backgroundColor:"#FFF",
    elevation:5,
    borderRadius:50,
  },
});