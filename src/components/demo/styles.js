import { StyleSheet, Dimensions } from  "react-native";
// import { Constants } from "@common";
const { width, height } = Dimensions.get("window");
const RatioH = height/667;
const RatioW = width/375;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
    },
    title: {
        justifyContent: "center",
        alignItems: "flex-start",
        // padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    header: {
        flexDirection: "row",
        marginBottom: 12*RatioH,
    },
    headerIco: {
        width: 30,
        height: 30
    }, 
    headerLeft: {
        justifyContent: "center",
        alignItems: "flex-start",
        marginLeft: 15*RatioW,
    },
    headerTitle: {
        flex: 1,
        alignItems: 'center'
    },
    headerRight: {
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 15*RatioW,
        flexDirection: "row",
    },
    tabTitle: {
        fontSize: 16,
    },
    dropDownMenu: {
        flexDirection: "row",
        marginTop: 12,
        marginLeft: 12,
    },
    dropDownProductBtn: {
        borderWidth: 1, 
        borderRadius: 50, 
        borderColor: '#EEF1F3',
        backgroundColor: "#FAFBFD",
        paddingLeft: 12,
        marginLeft: 12,
        fontSize: 12,
        width: 100 * RatioW,
        height: 28 * RatioH,
        // padding: 8
    },
    dropDownTagsBtn: {
        // borderRadius: 15,
        borderWidth: 1, 
        borderRadius: 50, 
        borderColor: '#0077EA',
        backgroundColor: "#0077EA",
        paddingLeft: 12,
        marginLeft: 12,
        fontSize: 12,
        width: 100 * RatioW,
        height: 28 * RatioH,
        // padding: 8
    },
    filterResult: {
        // flex: 1,
        width: 351,
        height: 197,
        borderRadius: 4,
        backgroundColor: 'rgba(238,241,243,1)',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 15,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 15,
        paddingBottom: 16,
    },
    filterTitle: {
        flexDirection: "row",
    },
    invitation: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    invitations_title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    manageall: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    manage_all: {
        fontSize: 14,
        color: 'rgba(0,119,234,1)',
    },
    filteredAccount: {
        // flex: 1,
        flexDirection: "row",
        width: 327,
        height: 60,
        // alignItems: "center",
        marginTop: 16,
    },
    account:  {
        position: 'relative',
    },
    backgroundContainer: {
        width: 56,
        height: 56,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    logo: {
        width: 20 * RatioW,
        height: 20 * RatioH,
    },
    accountInfo: {
        marginLeft: 15 * RatioW,
        paddingTop: 6 * RatioH,
        // alignItems: 'flex-end'
    },
    accountName: {
        justifyContent: "center",
        // alignSelf: "center",
        fontSize: 16,
        width: 160*RatioW,
        height: 22*RatioH,
        alignSelf: "flex-start",
    },
    accountAddr: {
        justifyContent: "center",
        // alignSelf: "center",
        fontSize: 14,
        color: 'grey',
        width: 160*RatioW,
        height: 22*RatioH,
    },
    closeIcon: {
        justifyContent: "center",
        alignSelf: "center",
        borderColor: '#E5E6E8',
        borderRadius: 50,
        borderWidth: 2,
        padding: 2,
        marginLeft: 10,
    },
    roundCheck: {
        width: 48 * RatioW,
        height: 32 * RatioH,
        borderRadius: 16,
        marginLeft: 12,
        backgroundColor: 'rgba(0,173,111,1)',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        // flexDirection: "column",
    },
    accountList: {
        flex: 1,
        width: 327,
        height: 112,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 16,
        borderBottomWidth: 0.3,
        borderBottomColor: 'grey',
    },
    backdrop: {
        width: 56,
        height: 56,
    },
    accounts: {
        flexDirection: "row",
        width: 327 * RatioW,
    },
    other_account_info: {
        marginLeft: 12 * RatioW,
        marginTop: 4 * RatioH,
    },
    accountAction: {
        flexDirection: "row",
        alignItems: "center"
    },
    buyImg: {
        width: 14,
        height: 14,
    },
    connectionImg: {
        width: 17,
        height: 16,
        marginLeft: 10,
    },
    action_label: {
        marginLeft: 4, 
        color: 'grey',
        fontSize: 12,
    },
    other_info: {
        width: 327,
        flexDirection: "row",
        paddingTop: 8.22,
    },
    aluminium: {
        color: 'grey', 
        fontSize: 12,
        borderLeftWidth: 1,
        borderLeftColor: "grey",
    },
    info_label: {
        color: 'grey',
        fontSize: 12,
        marginLeft: 5,
        paddingLeft: 5,
        borderLeftWidth: 1,
        borderLeftColor: "grey",
    },
    tagImg: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    chatBtn: {
        width: 40,
        height: 40,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: 'rgba(238, 241, 243, 1)',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(250, 251, 253, 1)',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    chatImg: {
        width: 18,
        height: 19,
    },
    footer: {
        flex: 1,
    },
    footerIco: {
        width:25,
        height: 25,
        marginTop: 15.91,
        marginBottom: 10.91,
    },
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },
})

export default styles;