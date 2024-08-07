import { useMsal } from '@azure/msal-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IUser from './IUser'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const Dashboard = () => {
    const {instance,accounts}=useMsal()
    const [users,setUsers]=useState<IUser[]>([]);
    const [selectedUsers,setSelectedUsers]=useState<IUser[]>([]);
    useEffect(()=>{
        const accesstoken=async ()=>{return await instance.acquireTokenSilent({scopes:["https://z433n.sharepoint.com/.default"],account:accounts[0]})}
        accesstoken().then((res)=>{
            console.log(res.accessToken)
            axios.get(`https://z433n.sharepoint.com/sites/RSSCHelpdesk/_api/web/lists/getbyTitle('Deptconfig')/items`,{
                // method: "GET",
                headers: {
                    "Authorization": "Bearer " + res.accessToken
    
                } 
              }).then((res)=>{
                console.log(res)

            })
        })
    })
    const getusers = (event: string) => {
        if(event.length>=3){
        const accesstoken = async () => { return await instance.acquireTokenSilent({ scopes: ["User.ReadWrite.All"], account: accounts[0] }) }
        accesstoken().then((res) =>
            axios.get(`https://graph.microsoft.com/v1.0/users?$filter=startsWith(displayName,'${event}')`, {
                // method: "GET",
                headers: {
                    "Authorization": "Bearer " + res.accessToken,
                    "Scopes": "User.Read.All"
                }
            }).then((res)=>setUsers(res.data.value))
        );
        console.log(users)
    }}
  return (<>
    <div>Dashboard</div>
    <input type='text' onChange={(e)=>getusers(e.target.value)}/>
      <List>
          {users?.map((item) => {
              return <ListItem disablePadding>
                  <ListItemButton onClick={()=>setSelectedUsers([...selectedUsers,item])}>
                      <ListItemText primary={item.displayName} />
                  </ListItemButton>
              </ListItem>
          })}
      </List>
    
    </>
  )
}

export default Dashboard