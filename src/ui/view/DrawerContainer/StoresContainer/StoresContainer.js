import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../../components/navigation/Header';
import Button from '../../../components/Button';
import ReturnButton from '../../../components/navigation/ReturnButton';
import { COLORS, WHITE, RED } from '../../../../utilities/styles/Colors';
import Message from '../../../components/Message';
import useGetAccessToken from './hooks/useGetAccessToken';

const StoresContainer = (props) => {
    const navigation = useNavigation();
    const { loginHandler, loadLogin } = useGetAccessToken({ phone: '89662442', login: props.login }); 

    return (
        <>
            <View>
                <Header
                    color={'BLUE'}
                    titleDirection="center"
                    titleSize={20}
                    title="Store's"
                    leftButton={
                        <ReturnButton
                            onPress={() => navigation.pop()}
                            color={COLORS(WHITE, 1)}
                            iconAndText
                        />
                    }
                    drawerIcon
                />
                <View style={{ marginTop: 50 }}>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Message
                                text='AccessToken: '
                                font="bold"
                                size={16}
                                color={COLORS(RED, 1)}
                            />
                            <Message
                                text={props.login.accessToken}
                                font="bold"
                                size={11}
                                color={COLORS(RED, 1)}
                            />
                        </View>

                        <Button type="blue" onPress={() => loginHandler()}>
                            {
                                !loadLogin ? (
                                    <Message
                                        text="Get AccessToken"
                                        font="bold"
                                        size={16}
                                        color={COLORS(WHITE, 1)}
                                    />
                                ) : (<ActivityIndicator color={COLORS(WHITE, 1)} />)
                            }
                        </Button>
                        <View style={{ marginVertical: 20 }} />
                        <Button type="blue">
                            <Message
                                text="GET"
                                font="bold"
                                size={16}
                                color={COLORS(WHITE, 1)}
                            />
                        </Button>
                        <View style={{ marginVertical: 20 }} />
                        <Button type="blue">
                            <Message
                                text="PUT"
                                font="bold"
                                size={16}
                                color={COLORS(WHITE, 1)}
                            />
                        </Button>
                    </View>
                    <View style={{ marginVertical: 20 }} />
                </View>
            </View>
        </>
    );
};

const mapStateToProps = (state) => ({
    login: state.auth,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginPartner: (number) => dispatch(fetchLoginPartner(number)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresContainer);
