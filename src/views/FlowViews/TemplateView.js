/**
 * Template for making the overlay views
 * Rename the class
 */

// Import Components
import React from "react";
import {
    StatusBar,
    View,
    Image
} from 'react-native';
import {
    Label
} from "native-base";

// Font Awesome 5
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Default style sheet
import Style from '../../styles/base/index';

// Import the main parts of each view
import AnimatedStackView from '../../styles/components/stack_view';
import CustomButtons from "../../styles/components/custom_buttons";
import ButtonTouchableTextComponent from "../../components/buttons/ButtonTouchableTextComponent";
import Triggers from "../../app_code/flows/triggers";

export default class TemplateView extends React.Component {

    // Global state
    Global = global.state;

    // Global configuration
    Configuration = global.configuration;

    // Image resources
    ImageResources = global.imageResources;

    // Local state
    state = {
    };

    // Constructor
    constructor(props) {
        super(props);
    }

    // View mounted and ready
    componentDidMount(){
        styles = new Style().get("FLOWS");
    }

    // View about to unmount
    componentWillUnmount() {
    }

    // View has been updated
    componentDidUpdate(){
    }

    testFunction() {
        alert("Injected");
    }

    testTrigger() {
        alert("This is a test trigger");
    }


    // Render view components
    render() {
        console.disableYellowBox = true;

        return (
            <AnimatedStackView>
                <View style={styles.container}>
                    <StatusBar hidden />
                    {this.props.info.skip &&
                    <ButtonTouchableTextComponent
                        onPress={()=>{this.props.info.skip.switch ?
                            this.props.controller.changeViewById(this.props.info.skip.switch) :
                            this.props.controller.exitFlow()}}
                        size={14}
                        align={'right'}
                        iconColor={'black'}
                        label={global.t.get$(this.props.info.skip.label)}
                        style={{
                            flex:0,
                            flexDirection: 'row',
                            alignItems:'flex-end',
                            width: '100%',
                            height: 30,
                            marginTop: 10,
                            paddingRight: 10,
                            opacity: 0.9}}
                    >
                    </ButtonTouchableTextComponent>}
                    <View style={{marginTop: 5, flex: 0, width:'100%', height:250, justifyItems:'center', alignItems:'center'}}>
                        <Image resizeMode={"contain"} style={{width:'90%', height:250}} source={this.ImageResources.get(this.props.info.image)}/>
                    </View>
                    <View style={{flexDirection: "row", flex:0, alignItems:'center', justifyItems: 'start', marginTop: 10}}>
                        <View style={{flex: 1, marginLeft: 20, width:30, height:30}}>
                            <Image resizeMode={"contain"} style={{width:30, height:30}} source={styles.brandIcon}/>
                        </View>
                        <Label style={[styles.h1, {flex: 8, marginLeft: -50, width:'90%', textAlign:'center', alignItems:'center'}]}>{this.props.info.title}</Label>
                    </View>
                    <View style={{flexDirection: "row", flex:0, alignItems:'center', justifyItems: 'start', marginTop: 10}}>
                        <Label style={[styles.h6, {flex: 8, paddingLeft: 10, paddingRight: 10, width:'100%', textAlign:'left', alignItems:'center'}]}>{global.t.get$(this.props.info.description)}</Label>
                    </View>
                    <CustomButtons navigation={this.props.navigation} trigger={new Triggers(this)} parent={this.props.controller} create={this.props.info.actionButtons} inject={[
                        {position: 4, label: 'Injected Button', route: () => this.testFunction()}
                    ]} />
                </View>
            </AnimatedStackView>
        );
    }
}
// Load default styles
let styles = new Style().get("FLOWS");