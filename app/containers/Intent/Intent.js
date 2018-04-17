import { connect } from 'react-redux';
import Intent from '../../components/Intent';

import {
  controlTab 
} from '../../actions';

export default connect(
  (state) => ({
    Intents: [
        {"intent_name":"清理，垃圾"},{"intent_name":"关闭，提醒"},{"intent_name":"查，音乐知识"},
        {"intent_name":"查，动物知识"},{"intent_name":"咨询，常见问题"},{"intent_name":"打开，网站"},
        {"intent_name":"点播，视频"},{"intent_name":"查看，设置"},{"intent_name":"听，音乐"}
    ],
    tabIndex: state.getIn(['ui','tabIndex'])
  }),
  (dispatch) => ({
    onChangeTab: (id) => () => {
      dispatch(controlTab({key:id}));
      //dispatch(setUser({ key: 'email', value: event.target.value }))
    }
  })

)(Intent);