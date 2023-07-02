import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {server} from "../index"
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from "./Loader";
import ErrorComp from './ErrorComp';
import CoinCard from './CoinCard';



    





const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("eur");
    // const [currencySymbol, setCurrencySymbol] = useState("₹");
    
    const currencySymbol = currency==="inr" ? "₹": currency==="eur"? "€": "$";

    const changePage = ()=>{
      setPage(page + 1);
      setLoading(true);
    };

    const prevPage = ()=>{
      setPage(page - 1);
      setLoading(true);
    };


    useEffect(() => {
        const fetchCoin = async() =>{
            try{
                const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
                console.log(data)
                setCoins(data);
                setLoading(false);
            } catch(error){
                setLoading(false);
                setError(true);
            }
        }

        fetchCoin()
    }, [currency, page]);

    if(error) return (
        <ErrorComp message={"Error while Fetching Coins "} />
    )

  return (
    <Container maxW={"container.xl"}>
        {loading? <Loader/> : 
        <>
        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={"4"}>
            <Radio value={"inr"} >INR</Radio>
            <Radio value={"usd"} >USD</Radio>
            <Radio value={"eur"} >EUR</Radio>

          </HStack>
        </RadioGroup>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
                coins.map((coin) => (
                    // <div key={exchange.id}>{exchange.name}</div>
                    <CoinCard 
                    id = {coin.id}
                    key={coin.id} 
                    name={coin.name} 
                    price={coin.current_price}
                    img={coin.image} 
                    symbol={coin.symbol} 
                    currencySymbol={currencySymbol}
                      />
                ))
            }
        </HStack>

        <HStack justifyContent={"center"} padding={"5"}>
          <Button 
          bgColor={"blackAlpha.800"} 
          color={"white"} 
          onClick={()=>prevPage()} 
          disabled={page===1}>
            Prev</Button>
          <Button 
          bgColor={"blackAlpha.800"} 
          color={"white"} 
          onClick= {()=>changePage()} >
            Next
            </Button>
        </HStack>
        </>}
    </Container>
  )
}



export default Coins



