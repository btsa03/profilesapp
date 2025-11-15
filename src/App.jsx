import { Amplify } from 'aws-amplify'
import { useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json'
import './App.css'

Amplify.configure(outputs)

function App() {
  const { signOut, user } = useAuthenticator()

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Bitisha Shrestha's Profile App</h1>
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>User Information</h2>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.signInDetails?.loginId || 'Loading...'}</p>
        <p style={{ fontSize: '1.5em', color: '#646cff', marginTop: '20px', fontWeight: 'bold' }}>
          Created by: Bitisha Shrestha
        </p>
      </div>
      <button onClick={signOut} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Sign Out
      </button>
    </div>
  )
}

export default App
