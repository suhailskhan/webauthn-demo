import React, { useCallback, useState } from 'react';
import { webAuthn } from './hooks/webAuthn.ts';

const rpOptions = {
  rpId: 'localhost',
  rpName: 'webauthn-demo'
}

function App() {
  const [login, setLogin] = useState('')
  const { getCredential, getAssertion } = webAuthn(rpOptions)

  const onChangeLogin = useCallback((e: any) => {
    setLogin(e.target.value)
  }, [])

  const onRegister = useCallback(async () => {
    const credential = await getCredential({
      challenge: 'stringFromServer',
      userDisplayName: login,
      userId: login,
      userName: login
    })
    console.log(credential)
  }, [getCredential, login])

  const onAuth = useCallback(async () => {
    const assertion = await getAssertion({ challenge: 'stringFromServer' })
    console.log(assertion)
  }, [getAssertion])

  return (
    <div className="App">
      <main>
        <div className="section">
          <input onInput={onChangeLogin} placeholder="login" type="text" />
        </div>
        <div className="section">
          <button onClick={onRegister} type="button">register</button>
        </div>
        <div className="del" />
        <div className="section">
          <button onClick={onAuth} type="button">auth</button>
        </div>
      </main>
    </div>
  );
}

export default App;
