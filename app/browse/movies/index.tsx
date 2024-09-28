import { FlatList, ScrollView, Text, View } from "react-native"
import Footer from "../../../src/components/Footer";
import categories from "../../../assets/data/categories";
import Card from "../../../src/components/Card";
import Subheader from "../../../src/components/SubHeader/Subheader";

const movies = () => {
  return (
    <ScrollView>
      {/* <Navbar/> */}
      <Subheader genreTitle="Movies"/>

      <View className="w-11/12 mt-5 h-auto self-center flex">
        

        {/* Cards */}
        <FlatList
          // className="overflow-x-hidden"
          data={categories.items}
          renderItem={({ item }) => <Card category={item}></Card>}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      <Footer></Footer>
    </ScrollView>
  );
}
export default movies