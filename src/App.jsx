import { useState, useEffect } from 'react'
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/data'
import { useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import outputs from '../amplify_outputs.json'
import './App.css'

Amplify.configure(outputs)
const client = generateClient({ authMode: 'userPool' })

function App() {
  const { signOut, user } = useAuthenticator()
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    if (user) {
      fetchUserProfile()
    }
  }, [user])

  async function fetchUserProfile() {
    try {
      const { data } = await client.models.UserProfile.list()
      if (data && data.length > 0) {
        setUserProfile(data[0])
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Bitisha Shrestha's Profile App</h1>
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>User Information</h2>
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {userProfile?.email || user?.signInDetails?.loginId || 'Loading...'}</p>
        <p style={{ fontSize: '1.2em', color: '#646cff', marginTop: '20px' }}>
          <strong>Created by: Bitisha Shrestha</strong>
        </p>
      </div>
      <button onClick={signOut} style={{ marginTop: '20px' }}>
        Sign Out
      </button>
    </div>
  )
}

export default App
