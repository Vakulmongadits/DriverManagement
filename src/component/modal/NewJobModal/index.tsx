import React from "react";
import { Image, Modal, SafeAreaView, Text, View } from "react-native";
import { moderateScale } from "../../../utils/Metrics";
import ButtonComponent from "../../../component/ButtonComponent";
import { ColorConstant } from "../../../utils/ColorConstant";
interface Props {
    showModal: boolean;
    hideModal: any;
    onAccept: any
}

const NewJobModal = ({ showModal, hideModal, onAccept }: Props) => {
    return <Modal visible={showModal} transparent={true}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end', alignItems: 'center' }}>

            <View style={{ width: moderateScale(300), backgroundColor: ColorConstant.WHITE, marginBottom: moderateScale(40), padding: moderateScale(10), alignItems: 'center' }}>

                <Image style={{ height: moderateScale(80), width: moderateScale(80), backgroundColor: 'red', margin: moderateScale(20) }} />
                <Text style={{ fontSize: moderateScale(14), textAlign: 'center' }}>New Job </Text>
                <Text style={{ fontSize: moderateScale(14), textAlign: 'center' }}>Title: </Text>
                <Text style={{ fontSize: moderateScale(14), textAlign: 'center' }}>Description: Found a new job for you, Destination is CP-67</Text>
                <View style={{ flexDirection: 'row', marginTop: moderateScale(10), height: moderateScale(40) }}>

                    <ButtonComponent containerStyle={{ flex: 1, marginEnd: 5, backgroundColor: 'red' }} title={"Decline"}
                        onPress={() => hideModal()} />

                    <ButtonComponent containerStyle={{ flex: 1, marginStart: 5, backgroundColor: 'green' }} title={"Accept"}
                        onPress={() => onAccept()} />
                </View>
            </View>
        </View>
    </Modal>
}

export default NewJobModal;