import React , {useState, useEffect, Suspense} from 'react';
import Loading from '../components/Loading'
import { openSource } from "../portfolio";
import {get} from 'axios';
import GithubProfileCard from 'components/GithubProfileCard';

const GithubProfile = () => {
    const query = `https://api.github.com/users/${openSource.githubUserName}`;
    const [prof, setProf] = useState({});
    async function getProfileData(q) {
      await get(q)
        .then((res) => setProf(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
      getProfileData(query);
    }, [query]);
    return ( 
        <Suspense fallback={<Loading />}>
           <GithubProfileCard prof={prof}/>
        </Suspense>
     );
}
 
export default GithubProfile;
