"use client";

import { useState } from "react";
import {
  createDeck,
  shuffle,
  handValue,
  determineWinner,
} from "@/lib/blackjack";
import BlackjackIcon from "../components/BlackjackIcon";

export default function Home() {
  const [deck, setDeck] = useState([]);
  const [player, setPlayer] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [status, setStatus] = useState("Click Deal to start");
  const [gameOver, setGameOver] = useState(false);

  function deal() {
    //  first create deck ,next shuffle
    const newDeck = shuffle(createDeck());

//  Pop() takes the last card , gives 2 cards
    const playerHand = [newDeck.pop(), newDeck.pop()];
    const dealerHand = [newDeck.pop(), newDeck.pop()];

    setDeck(newDeck);
    setPlayer(playerHand);  //update state => change UI
    setDealer(dealerHand);
    setStatus("Your turn");
    setGameOver(false);
  }
//              Hit betyder at tage et ekstra kort/ to make an extra card
  function hit() {
    if (gameOver) return;

    const newDeck = [...deck];
    const card = newDeck.pop(); // 1 nyt kort tages
    const newHand = [...player, card];

    setDeck(newDeck);
    setPlayer(newHand);
// ****** Bust
    if (handValue(newHand) > 21) {
      setStatus("You busted 😵 Dealer wins");
      setGameOver(true);
    }
  }
//                Stand means to stop & let the dealer play./betyder at stoppe & lade dealerne spille.
  function stand() {
    if (gameOver) return;

    let newDeck = [...deck];
    let dealerHand = [...dealer];

    while (handValue(dealerHand) < 17) {
      dealerHand.push(newDeck.pop());
    }

    setDealer(dealerHand);
    setDeck(newDeck);

    const result = determineWinner(player, dealerHand);
//  checks result
    if (result === "player") setStatus("You win 🎉");
    else if (result === "dealer") setStatus("Dealer wins 😐");
    else setStatus("Push 🤝");

    setGameOver(true);
  }
//  alle stater er restart
  function restart() {
    setPlayer([]);
    setDealer([]);
    setDeck([]);
    setStatus("Click Deal to start");
    setGameOver(false);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-md bg-red-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <BlackjackIcon className="w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold">Blackjack</h1>
        </div>

        <Section
          title={`Dealer (${handValue(dealer)})`}
          hand={dealer}
        />
        <Section
          title={`You (${handValue(player)})`}
          hand={player}
        />

        <p className="text-center my-4 font-semibold">{status}</p>

        <div className="flex gap-2">
          <Button onClick={deal}>Deal</Button>
          <Button onClick={hit}>Hit</Button>
          <Button onClick={stand}>Stand</Button>
          <Button onClick={restart}>Restart</Button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, hand }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">{title}</h2>
      <div className="flex gap-2 flex-wrap max-h-32 overflow-y-auto">
        {hand.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="w-20 h-20 bg-white text-black rounded-xl p-2 flex flex-col justify-between text-sm font-semibold">
      <span>{card.value}</span>
      <span className="text-right">{card.suit}</span>
    </div>
  );
}

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg transition"
    >
      {children}
    </button>
  );
}
