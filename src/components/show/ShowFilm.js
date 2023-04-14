import moment from "moment";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { url_cat, url_notFound } from "../../utils/LinkURL";
import CardTime from "../card/TimeCard";
import DropListShow from "../droplist.js/DropListShow";
import SimpleLottie from "../loading/CatSleeping";
import NotFound from "../loading/NotFound";
import useShowFilmHook from "./useShowFilmHook";

const ShowFilm = () => {
  const {
    datePicked,
    setPicked,
    open,
    setOpen,
    value,
    setValue,
    cinemas,
    setCinemas,
    setDateQUery,
    shows,
    loading,
    setLoading,
  } = useShowFilmHook();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 20, paddingBottom: 20 }}>
        <View style={styles.optionTop}>
          <DropDownPicker
            open={open}
            value={value}
            items={cinemas}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setCinemas}
          />
        </View>
        <View style={styles.blocksTime}>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={({ item }) => (
              <CardTime
                item={item}
                datePicked={datePicked}
                onSetPicked={setPicked}
                setDateQUery={setDateQUery}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 12,
              color: "#BBBBBB",
            }}
          >
            {datePicked.text}
          </Text>
        </View>
      </View>
      <ScrollView style={{ marginTop: 0, height: "100%" }}>
        {loading ? (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 400,
            }}
          >
            <SimpleLottie />
          </View>
        ) : (
          <>
            {shows.length === 0 ? (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  height: 400,
                }}
              >
                <NotFound />
              </View>
            ) : (
              <>
                {shows?.map((val, idx) => {
                  return (
                    <DropListShow
                      key={Math.random()}
                      idx={idx}
                      show={val}
                      status
                    />
                  );
                })}
              </>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  noShow: {
    textAlign: "center",
    marginTop: "50%",
    color: "#333",
  },
  optionTop: {
    width: "100%",
    paddingVertical: 20,
  },
});

export default ShowFilm;
