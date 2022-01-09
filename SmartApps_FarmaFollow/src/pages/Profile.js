import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import firebase from '../firebase'

function Profile() {
    
    const { currentUser } = useAuth();
    


    return (
        <div>
            Profile Page
        </div>
    )
}

export default Profile
