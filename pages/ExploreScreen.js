import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";

import Lista from "./Lista/index";

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: "3",
          nome: "Everton Moscaleski",
          descricao: "Bora trabalhar Haha",
          imgperfil:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t39.30808-1/330443304_880163479732629_96763639343494598_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AEcI6D-_u7gQ7kNvgHSKjLj&_nc_ht=scontent.fcac6-1.fna&oh=00_AYCvhAhCVDpBR3auymgfg3JBYG-U-gRfV-WJMzYE1M-RSw&oe=66558CD0",
          imgPublicacao:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t39.30808-1/330443304_880163479732629_96763639343494598_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AEcI6D-_u7gQ7kNvgHSKjLj&_nc_ht=scontent.fcac6-1.fna&oh=00_AYCvhAhCVDpBR3auymgfg3JBYG-U-gRfV-WJMzYE1M-RSw&oe=66558CD0",
          likeada: false,
          likers: 3,
        },
        {
          id: "3",
          nome: "Michelle Mello",
          descricao: "Bora trabalhar Haha",
          imgperfil:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t1.6435-9/69450841_2442990389130427_8218364490048077824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O03pcWWJKowQ7kNvgEkHvWD&_nc_ht=scontent.fcac6-1.fna&oh=00_AYAudAHU4UjIAKXWAuunX_plkorhTa-jbSfVdP-em3PEVw&oe=66775F60",
          imgPublicacao:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t1.6435-9/69450841_2442990389130427_8218364490048077824_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O03pcWWJKowQ7kNvgEkHvWD&_nc_ht=scontent.fcac6-1.fna&oh=00_AYAudAHU4UjIAKXWAuunX_plkorhTa-jbSfVdP-em3PEVw&oe=66775F60",
          likeada: false,
          likers: 3,
        },
        {
          id: "4",
          nome: "Gabriela Letícia",
          descricao: "Isso sim que é TI!",
          imgperfil:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t39.30808-6/316541713_2441612889310585_6869522136471006389_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rtjyk6mJ5PgQ7kNvgE0--6F&_nc_ht=scontent.fcac6-1.fna&oh=00_AYCbAGedLfaH4FeAhXM2R6b_F_5xRVZFxcOlEhTv-5coZw&oe=6655B2DF",
          imgPublicacao:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t39.30808-6/316541713_2441612889310585_6869522136471006389_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rtjyk6mJ5PgQ7kNvgE0--6F&_nc_ht=scontent.fcac6-1.fna&oh=00_AYCbAGedLfaH4FeAhXM2R6b_F_5xRVZFxcOlEhTv-5coZw&oe=6655B2DF",
          likeada: false,
          likers: 1,
        },
        {
          id: "5",
          nome: "Guilherme",
          descricao: "Boa tarde galera do insta...",
          imgperfil:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t1.6435-9/49660159_1108403719342493_8780565719000547328_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0XR40iiiNwIQ7kNvgHWefxt&_nc_ht=scontent.fcac6-1.fna&oh=00_AYBsyDrl0qs1PFt7zLeIs7vH6NIS5e_ZZsYPBAHtC5CDNQ&oe=66773979",
          imgPublicacao:
            "https://scontent.fcac6-1.fna.fbcdn.net/v/t1.6435-9/49660159_1108403719342493_8780565719000547328_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0XR40iiiNwIQ7kNvgHWefxt&_nc_ht=scontent.fcac6-1.fna&oh=00_AYBsyDrl0qs1PFt7zLeIs7vH6NIS5e_ZZsYPBAHtC5CDNQ&oe=66773979",
          likeada: false,
          likers: 32,
        },
        {
          id: "6",
          nome: "Gabriel Kin",
          descricao: "Trabalho muito...",
          imgperfil:
            "https://media.licdn.com/dms/image/C4D03AQExWCMxSXyXaQ/profile-displayphoto-shrink_800_800/0/1604513546454?e=1721865600&v=beta&t=i_RaS9xPhcv1vMXKHdLgMrjr7N15chwh6Ou8MzToKEQ",
          imgPublicacao:
            "https://media.licdn.com/dms/image/C4D03AQExWCMxSXyXaQ/profile-displayphoto-shrink_800_800/0/1604513546454?e=1721865600&v=beta&t=i_RaS9xPhcv1vMXKHdLgMrjr7N15chwh6Ou8MzToKEQ",
          likeada: false,
          likers: 32,
        },
      ],
    };
  }

  render() {
    return (
      <ImageBackground
        source={require("./img/fundo.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            {/*<TouchableOpacity>
            <Image source={require("./img/logo.png")} style={styles.logo} />
          </TouchableOpacity>*/}
            <TouchableOpacity>
              <Image source={require("./img/send.png")} style={styles.send} />
            </TouchableOpacity>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={this.state.feed}
            renderItem={({ item }) => <Lista data={item} />}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  background: {
    height: "100%",
  },
  header: {
    height: 55,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1,
  },
  send: {
    width: 23,
    height: 23,
  },
});

export default ExploreScreen;
