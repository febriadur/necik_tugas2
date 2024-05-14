import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      {
        id: 1,
        name: 'Buku',
        price: 50,
        photo:
          'https://asset.kompas.com/crops/kZC3PG_Rx31PHEIK5Z-qwNq02iM=/118x255:1651x1277/750x500/data/photo/2021/07/02/60de7f2cd33ec.jpg',
      },
      
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              toko bunga
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'aqua',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 110, height: 120, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;