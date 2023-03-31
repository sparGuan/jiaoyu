// src/styles/general.js

const general = {
  border1: {
    borderWidth: 1,
    borderColor: '#AFB0B3',
  },
  row: {
    flexDirection: 'row',    
  },
  alignCenter: {
    alignItems: 'center'
  },
  flex1: {
    flex: 1
  },
  b_0: {
    border: 0
  }
  
};
const iniSpace = () => {
    for (let i = 0; i < 100; i++) {
      general[`p_l_${i}`] = {
        "paddingLeft": i
      }
      general[`p_t_${i}`] = {
        "paddingTop": i
      }
      general[`p_b_${i}`] = 
      {
        "paddingBottom": i
      }
      general[`p_r_${i}`] = {
        "paddingRight": i
      }

      general[`m_l_${i}`] = 
      {
        "marginLeft": i
      }
      
      general[`m_t_${i}`] = 
      {
        "marginTop": i
      }
      
      general[`m_b_${i}`] = 
      {
        "marginBottom": i
      }
      
      general[`m_r_${i}`] = 
      {
        "marginRight": i
      }
      
    }
}
const iniborderRadius = () => {
  for (let i = 0; i < 30; i++) {
    general[`b_cr_${i}`] = {
      "borderRadius": i,
      "overflow": 'hidden'
    }
    general[`b_bl_${i}`] = {
      "borderBottomLeftRadius": i,
      "overflow": 'hidden'
    }
    general[`b_br_${i}`] = {
      "borderBottomRightRadius": i,
      "overflow": 'hidden'
    }
    general[`b_tr_${i}`] = 
    {
      "borderTopRightRadius": i,
      "overflow": 'hidden'
    }
    general[`b_tl_${i}`] = {
      "borderTopLeftRadius": i,
      "overflow": 'hidden'
    }
    
  }
}

iniSpace()
iniborderRadius()
export default general;
