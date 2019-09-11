import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styles';

export default class People extends React.Component {

    renderItem = ({item}) => {
        return (
        <View style = {styles.accountList}>
            <View style = {styles.accounts}>
                <View style = {styles.account}>
                    <View style = {styles.backgroundContainer}>
                        <Image source = {require('../../../../assert/icon/account_circle.png')} resizeMode = 'cover' style = {styles.backdrop} />
                    </View>
                    <View style = {styles.overlay}>
                        <Image style = {styles.logo} source = { require('../../../../assert/icon/Verified-C-P.png') }/>
                    </View>
                </View>
                
                <View style = {styles.other_account_info}>
                    <View style={{width: 260, flexDirection: 'row'}}>
                        <Text style = {styles.accountName}>{item.key}</Text>
                        <Image style = {styles.tagImg} source = { require('../../../../assert/icon/Tag.png') }/>
                    </View>
                    <Text style = {styles.accountAddr}>Metrum Organics, NL</Text>
                    <View style = {styles.accountAction}>
                        <Image style = {styles.buyImg} source = { require('../../../../assert/icon/BS.png') }/>
                        <Text style = {styles.action_label}>Buying/Selling</Text>
                        <Image style = {styles.connectionImg} source = { require('../../../../assert/icon/connection.png') }/>
                        <Text style = {styles.action_label}>Connection</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.other_info}>
                <View style = {{ flexDirection: "row" }}>
                    <Text style = {styles.aluminium}>Aluminium</Text>
                    <Text style = {styles.info_label}>Copper Millbery</Text>
                    <Text style = {styles.info_label}>Zinc</Text>
                    <Text style = {styles.info_label}>+5</Text>
                </View>
                <View style = {styles.chatBtn}>
                    <Image style = {styles.chatImg} source = { require('../../../../assert/icon/chat.png') }/>
                </View>
            </View>
            
        </View>
        )
    }

    render() {
        var product = [{
            value: 'Product',
        }, {
            value: 'Product',
        }, {
            value: 'Product',
        }];
        var tag = [{
            value: "Tags",
        }, {
            value: "Tags",
        }];

        return (
            <View style={{flex: 1}}>
                <View style={styles.dropDownMenu}>
                    <Dropdown
                        label = "Product"
                        dropdownOffset = {{ top:5 }}
                        containerStyle = { styles.dropDownProductBtn }
                        rippleCentered = { true }
                        inputContainerStyle = {{ borderBottomColor: 'transparent' }}
                        data = { product }
                        dropdownMargins = {{ min:1, max:1}}
                    />
                    <Dropdown 
                        label="Tags (2)"
                        baseColor = "rgba(255, 255, 255, 1)"
                        dropdownOffset = {{ top:5 }}
                        containerStyle = { styles.dropDownTagsBtn }
                        rippleCentered = { true }
                        inputContainerStyle = {{ borderBottomColor: 'transparent' }}
                        data = { tag }
                    />
                </View>

                <View style={styles.filterResult}>
                    <View style={styles.filterTitle}>
                        <View style = {styles.invitation}>
                            <Text style = {styles.invitations_title}> Invitations (2) </Text>
                        </View>
                        <View style = {styles.manageall}>
                            <Text style = { styles.manage_all}> Manage All</Text>
                        </View>
                    </View>

                    <View style={styles.filteredAccount}>
                        <View style = {styles.account}>
                            <View style = {styles.backgroundContainer}>
                                <Image source = {require('../../../../assert/icon/account_circle.png')} resizeMode = 'cover' style = {styles.backdrop} />
                            </View>
                            <View style = {styles.overlay}>
                                <Image style = {styles.logo} source = { require('../../../../assert/icon/Verified-C-P.png') }/>
                            </View>
                        </View>

                        <View style = {styles.accountInfo}>
                            <Text style = {styles.accountName}>Filipa Gaspar</Text>
                            <Text style = {styles.accountAddr}>Metrum Organics, NL</Text>
                        </View>

                        <View style = {styles.closeIcon}>
                            <Icon size = {23} name="close" color = {'grey'}/>
                        </View>

                        <View style = {styles.roundCheck}>
                            <Icon size = {25} name="check" color = {'white'} />
                        </View>

                    </View>

                    <View style={styles.filteredAccount}>
                        <View style = {styles.account}>
                            <View style = {styles.backgroundContainer}>
                                <Image source = {require('../../../../assert/icon/account_circle.png')} resizeMode = 'cover' style = {styles.backdrop} />
                            </View>
                            <View style = {styles.overlay}>
                                <Image style = {styles.logo} source = { require('../../../../assert/icon/Verified-C-P.png') }/>
                            </View>
                        </View>

                        <View style = {styles.accountInfo}>
                            <Text style = {styles.accountName}>Mark Mccelandon</Text>
                            <Text style = {styles.accountAddr}>Metal Dimension, UK</Text>
                        </View>

                        <View style = {styles.closeIcon}>
                            <Icon size = {23} name="close" color = {'grey'}/>
                        </View>

                        <View style = {styles.roundCheck}>
                            <Icon size = {25} name="check" color = {'white'} />
                        </View>
                    </View>

                </View>

                {/* <FlatList renderItem={this.renderItem} numColumns = {2} data = {this.state.data}/> */}
                <FlatList
                    data={[
                        {key: 'Alberto gaspar'},
                        {key: 'Daren Hichkinson'},
                        {key: 'Alberto gaspar'},
                        {key: 'Daren Hichkinson'},
                        {key: 'Alberto gaspar'},
                        {key: 'Daren Hichkinson'},
                    ]}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
