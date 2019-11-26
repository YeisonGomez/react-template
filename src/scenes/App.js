import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import moment from 'moment'

import '../i18n/i18n'
import { Private } from '../scenes/Layout/Private/Private'
import { Public } from '../scenes/Layout/Public/Public'

export const App = () => {
  
  const { authentication } = useSelector(state => state.auth)

  useEffect(() => {
    moment.locale('en');
  }, []);

  return (
    <div>
      {!authentication && <Public />}
      { authentication && <Private/>}
    </div>
  );
}
