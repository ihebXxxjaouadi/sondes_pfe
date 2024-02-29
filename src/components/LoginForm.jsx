import React, { useEffect, useRef, useState } from "react";
import Google from "../assets/google.png";
import LogoFullMazeAlgo from "../svgCompoenents/LogoFullMazeAlgo";
import LogoBrain from "../svgCompoenents/LogoBrain";
import LogoTextMazeAlgo from "../svgCompoenents/LogoTextMazeAlgo";
import gsap from "gsap";

export default function LoginForm() {
  useEffect(() => {
    gsap
      .timeline()
      .to(".showCon", {
        duration: 2,
        width: "100%",
        delay: 1,
        ease: "power3.inOut",
      })

      .to(".svgCon", {
        y: 10,
        duration: 1.3,
        ease: "power3.inOut",
        opacity: 1,
      })
      .to(".svgCon", {
        y: -30,
        duration: 0.3,
        ease: "linear",
        opacity: 0,
      })

      .to(".showCon", {
        duration: 1.3,
        left: 0,
        width: "50%",
        ease: "power3.inOut",
      })

      .to(".loginAndCreateCon", {
        duration: 0,
        opacity: 1,
        delay: -2,
      })

      .to(".rotatedCon", {
        duration: 0.5,
        opacity: 1,
      });
  }, []);

  let [wichForm, setForm] = useState(true);
  let FORMOPACITY = useRef();

  let translateBetweenCreateAndLogin = () => {
    gsap
      .timeline()
      .to(".showCon", {
        duration: 1.3,
        width: "100%",
        ease: "power3.inOut",
      })
      .to(".showCon", {
        duration: 1.3,
        right: 0,
        width: "50%",
        ease: "power3.inOut",
      });
    setTimeout(() => {
      setForm(!wichForm);
    }, 1000);

    setTimeout(() => {
      FORMOPACITY.current.style.opacity = 1;
    }, 1100);
  };

  return (
    <div className="loginForm">
      <div className="showCon">
        <div className="startLogos">
          <div className="svgCon">
            <LogoTextMazeAlgo />
            <LogoBrain />
          </div>
        </div>
        <div className="rotatedCon">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </div>
      {wichForm && (
        <LoginComponent
          translateBetweenCreateAndLogin={translateBetweenCreateAndLogin}
          FORMOPACITY={FORMOPACITY}
        />
      )}

      {!wichForm && (
        <CreateAccountComponent
          translateBetweenCreateAndLogin={translateBetweenCreateAndLogin}
          FORMOPACITY={FORMOPACITY}
        />
      )}
    </div>
  );
}

const Content = () => {
  return (
    <>
      <p className="toLeft">
        {
          "def binary_search(arr, value, offset=0) mid =  (arr.length) / 2 if value < arr[mid] binary_search(arr[0...mid], value, offset) elsif value > arr[mid] binary_search(arr[(mid + 1)..-1], value, offset + mid + 1) else return offset + mid end end def binary_search(arr, value, offset=0) mid =  (arr.length) / 2 if value < arr[mid] binary_search(arr[0...mid], value, offset) elsif value > arr[mid] binary_search(arr[(mid + 1)..-1], value, offset + mid + 1) else return offset + mid end end def binary_search(arr, value, offset=0) mid =  (arr.length) / 2 if value < arr[mid] binary_search(arr[0...mid], value, offset) elsif value > arr[mid] binary_search(arr[(mid + 1)..-1], value, offset + mid + 1) else return offset + mid end end"
        }
      </p>
      <p className="toRight">
        {" "}
        {
          "var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('Hello World!'); }).listen(8080); var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('Hello World!'); }).listen(8080); var http = require('http'); http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('Hello World!'); }).listen(8080); var MongoClient = require('mongodb').MongoClient; var url = \"mongodb://localhost:27017/\"; MongoClient.connect(url, function(err, db) { if (err) throw err; var dbo = db.db(\"mydb\"); var myobj = { name: Company Inc, address: Highway 37 }; "
        }{" "}
      </p>
      <p className="toLeft">
        {
          '""Reinforcement learning agents that can be run on OpenAI gym environs""" from abc import ABC, abstractmethod from collections import defaultdict import numpy as np from .rl_utils import EnvModel, env_stats, tile_state_space from ..utils.data_structures import Dict class AgentBase(ABC): def __init__(self, env): super().__init__() self.env = env self.parameters = {} self.hyperparameters = {} self.derived_variables = {} self.env_info = env_stats(env) def _create_2num_dicts(self, obs_encoder=None, act_encoder=None): E = self.env_info n_states = np.prod(E["n_obs_per_dim"]) n_actions = np.prod(E["n_actions_per_dim"]) # create action -> scalar dictionaries self._num2action = Dict() self._action2num = Dict(act_encoder) if n_actions '
        }
      </p>
      <p className="toRight">
        {" "}
        {
          "P(Y-X=m | Y > X) &= sum_{k} P(Y-X=m, X=k | Y > X)  &= sum_{k}  P(Y-X=m | X=k, Y > X) P(X=k | Y > X)  &= sum_{k}  P(Y-k=m | Y > k) P(X=k | Y > X).end{align*}$$ P(Y-X=m | Y > X) &= sum_{k} P(Y-X=m, X=k | Y > X)  &= sum_{k}  P(Y-X=m | X=k, Y > X) P(X=k | Y > X)  &= sum_{k}  P(Y-k=m | Y > k) P(X=k | Y > X).end{align*}$$P(Y-X=m | Y > X) &= sum_{k} P(Y-X=m, X=k | Y > X)  &= sum_{k}  P(Y-X=m | X=k, Y > X) P(X=k | Y > X)  &= sum_{k}  P(Y-k=m | Y > k) P(X=k | Y > X).end{align*}$$  end{align*}$$P(Y-X=m | Y > X) &= sum_{k} P(Y-X=m, X=k | Y > X)  &= sum_{k}  P(Y-X=m | X=k, Y > X) P(X=k | Y > X)  &= sum_{k}  P(Y-k=m | Y > k) P(X=k | Y > X).end{align*}$$  end{align*}$$P(Y-X=m | Y > X) &= sum_{k} P(Y-X=m, X=k | Y > X) "
        }
      </p>
    </>
  );
};

let CreateAccountComponent = ({
  translateBetweenCreateAndLogin,
  FORMOPACITY,
}) => {
  return (
    <div ref={FORMOPACITY} className="loginAndCreateCon">
      <header>
        <LogoFullMazeAlgo />
        <h2>Créer un compte</h2>
      </header>

      <main className="formLogin">
        <input className="regularInput" type="text" placeholder="nom" />
        <input className="regularInput" type="email" placeholder="email" />

        <div className="selectOptionCon">
          <input
            type="button"
            className="regularOptionSelect regularInput"
            value="Genre"
          />
          <div className="popUpSelectOption">
            <input
              type="button"
              className="regularOption regularInput"
              value="Homme"
            />
            <input
              type="button"
              className="regularOption regularInput"
              value="Femme"
            />
          </div>
        <input
          className="regularInput"
          type="password"
          placeholder="mots de passe"
        />
        </div>
        <button className="regularBtn">Continue </button>

        <button className="outlineBtn" onClick={translateBetweenCreateAndLogin}>
          Retour pour connecter
        </button>
      </main>
    </div>
  );
};
let LoginComponent = ({ translateBetweenCreateAndLogin, FORMOPACITY }) => {
  let showPopUpViewSendPassCon = () => {
    gsap
      .timeline()
      .to(".popUpViewSendPassCon", {
        duration: 0.4,
        backdropFilter: "blur(2px)",
        pointerEvents: "all",
      })

      .to(".popUpViewSendPassCon .inner", {
        y: 0,
        opacity: 1,
        duration: 0.2,
      });
  };

  let hidePopUpViewSendPassCon = () => {
    gsap
      .timeline()

      .to(".popUpViewSendPassCon .inner", {
        y: 50,
        opacity: 0,
        duration: 0.2,
      })

      .to(".popUpViewSendPassCon", {
        duration: 0.4,
        backdropFilter: "blur(0px)",
        pointerEvents: "none",
      });
  };
  return (
    <div ref={FORMOPACITY} className="loginAndCreateCon loginCon">
      <div className="popUpViewSendPassCon">
        <div className="inner">
          <h4>Réinitialiser le mot de passe</h4>

          <input className="regularInput" type="email" placeholder="email" />

          <button className="regularBtn">Envoyee</button>

          <button className="outlineBtn" onClick={hidePopUpViewSendPassCon}>
            Annuler
          </button>
        </div>
      </div>
      <header>
        <LogoFullMazeAlgo />
        <h2>Connecter</h2>
      </header>
      <main className="formLogin">
        <input className="regularInput" type="email" placeholder="Email" />
        <input
          className="regularInput"
          type="password"
          placeholder="Mots de passe"
        />
        <button className="regularBtn">Connecter </button>
        <button className="regularBtn">
          Continuer avec <img src={Google} alt="" />
        </button>
        <button className="outlineBtn" onClick={translateBetweenCreateAndLogin}>
          Creér un compte
        </button>

        <p onClick={showPopUpViewSendPassCon}>Mots de passe oubliés ?</p>
      </main>
    </div>
  );
};
