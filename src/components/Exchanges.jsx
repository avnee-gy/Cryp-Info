import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {server} from "../index"
import { Container, HStack, VStack,Heading, Text, Image } from '@chakra-ui/react'
import Loader from "./Loader";
import ErrorComp from './ErrorComp';



const ExchangeCard=({name, img,rank, url})=>(
        <a href={url} target={"blank"}>
        <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} 
        css= {{
            "&:hover":{"transform": "scale(1.1)"},
            }} 
            >
            
            <Image src={img} alt={name} w={"10"} h={"10"} objectFit = {"contain"} />
            
            <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
        </VStack>

    </a>
    )
    
    





const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async() =>{
            try{
                const {data} = await axios.get(`${server}/exchanges`)
                console.log(data)
                setExchanges(data);
                setLoading(false);
            } catch(error){
                setLoading(false);
                setError(true);
            }
        }

        fetchExchanges()
    }, []);

    if(error) return (
        <ErrorComp message={"Error while Fetching Exchange "} />
    )

  return (
    <Container maxW={"container.xl"}>
        {loading? <Loader/> : 
        <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
                exchanges.map((exchange) => (
                    // <div key={exchange.id}>{exchange.name}</div>
                    <ExchangeCard key={exchange.id} name={exchange.name} img={exchange.image} rank={exchange.trust_score_rank} url=
                    {exchange.url}  />
                ))
            }
        </HStack>
        </>}
    </Container>
  )
}



export default Exchanges