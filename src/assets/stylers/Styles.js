import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    androidButtonText: {
        color: 'red',
        fontSize: 20,
    },
    external_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'violet',
    },
    external_title: {
        fontSize: 18,
        marginBottom: 16,
        color: '#fff',
        textAlign: 'center',
    },
    aifg_container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'pink',
    },
    aifg_first: {
        backgroundColor: "red",
        width: "33%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    aifg_second: {
        backgroundColor: "blue",
        width: "33%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    aifg_third: {
        backgroundColor: "green",
        width: "33%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    cc_container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    cc_title: {
        fontSize: 18,
        marginBottom: 16,
        color: 'red',
        textAlign: 'center',
    },
    passprops_title: {
        fontSize: 18,
        marginBottom: 16,
        color: 'blue',
        textAlign: 'center',
        width: 100,
    },
    linkText: {
        fontSize: 18,
        marginBottom: 16,
        color: 'blue',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    apiContainer: {
        marginTop: 33,
        height: 175,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "pink"
    },
    apiUrl: {
        width: 64,
        height: 64,
    },
    scroll: {
        width: "100%"
    },
    dts_container: {
        height: "100%",
        marginTop: 10,
        backgroundColor: "#F1F2F6",
    },
    dts_header: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    dts_searchform: {
        borderColor: "#EAECEF",
        borderWidth: 1,
        backgroundColor: "#fff",
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        height: 40,
    },
    dts_searchform_textinput: {
        width: "90%",
        height: 35,
        marginLeft: 10,
        backgroundColor: "#fff",
    },
    dts_profileview: {
        marginLeft: 15,
    },
    dts_profileimage: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 15,
    },
    dts_discoverplaces: {
        marginTop: 30,
    },
    dts_maincardheader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
    },
    dts_maincardheadertitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
    },
    dts_maincardheaderbutton: {
        backgroundColor: "#FF2D55",
        paddingHorizontal: 30,
        paddingVertical: 7,
        textAlign: "center",
        borderRadius: 3,
    },
    dts_maincardheaderbuttontext: {
        color: "#fff",
        fontSize: 15,
    },
    dts_mainslider: {
        marginLeft: 10,
        marginTop: 20,
    },
    dts_mainslideritem: {
        width: 175,
        height: 100,
        // borderRadius: 5,
        marginRight: 10,
        alignSelf: "center"
    },
    dts_mainslideritemimgbackground: {
        width: null,
        height: null,
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "flex-end",
        padding: 10,
    },
    dts_mainsliderimagetext: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },
    dts_explore: {
        marginTop: 30,
    },
    dts_gridviewplaces: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 20,
        flexWrap: "wrap",
    },
    dts_griditem: {
        width: 107,
        height: 70,
        marginBottom: 10,
    },
    dts_griditemimage: {
        width: null,
        height: null,
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    dts_griditemtext: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 15,
    },
    dts_savedplaces: {
        marginVertical: 15,
    },
    dts_bottomslider: {
        marginLeft: 10,
        marginTop: 20,
    },
    dts_bottomslideritem: {
        width: 150,
        height: 100,
        // borderRadius: 5,
        marginRight: 10,
        alignSelf: "center"
    },
    dts_bottomslideritemimgbackground: {
        width: null,
        height: null,
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "space-between",
        padding: 7,
    },
    dts_bottomsliderimagetext: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },
    dts_bottomslidericon: {
        textAlign: "right",
    },
});