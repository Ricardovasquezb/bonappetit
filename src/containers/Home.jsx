import React, {useState} from 'react'
import firebaseContext from "../hooks/firebaseContext"
import "../assets/css/homepg.css";
import Logo from "../assets/img/Logo_Fondo_Blanco.png";
import Image from "../components/Image";
import sweetalert from 'sweetalert'


const Consumer = firebaseContext.Consumer


const Home = props => {

    const [name, setName]=useState("");



    const user = localStorage.getItem("user")
    return(
        <Consumer>{
            contextResult => {
                const firebase = {
                    read: (uid) => contextResult.firebaseDatabase.ref(`users/${uid}`).once('value'),
                }
               
                firebase.read(user)
                .then(function (snapshot) {
                    console.log(snapshot,snapshot.val())
                    setName(snapshot.val().name);

                    if(snapshot.val().name != null){
                        sweetalert("Bienvenido, "+ name,"","success")
                    }
                    
                    
                    
                })
                .catch(function (error) {
                    
                })
                return(
                    <div id="HomePage">
                      <div id="OFERTAS">
                        <span>OFERTAS</span>
                      </div>
                      <div id="trending">
                        <div id="trending_o">
                          <div id="Repeat_Grid_5">
                            <div id="Group_2">
                              <div onclick="application.goToTargetView(event)" id="Base">
                                <svg class="Base_s">
                                  <rect
                                    fill="rgba(255,255,255,1)"
                                    id="Base_s"
                                    rx="0"
                                    ry="0"
                                    x="0"
                                    y="0"
                                    width="360"
                                    height="180"
                                  ></rect>
                                </svg>
                                <img
                                  id="Image"
                                  src="Image.png"
                                  srcset="Image.png 1x, Image@2x.png 2x"
                                ></img>
                              </div>
                              <div id="Mes_n_de_la_Cava">
                                <span>Mesón de la Cava</span>
                              </div>
                              <div id="Lorem_ipsum_dolor_sit_amet__ip">
                                <span>
                                  Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                                  has appareat.
                                </span>
                              </div>
                              <div id="time">
                                <div id="ID2m_ago">
                                  <span>2m ago</span>
                                </div>
                                <div id="time_y">
                                  <svg class="Path_5" viewBox="0 0 16 16">
                                    <path
                                      fill="rgba(203,208,211,1)"
                                      id="Path_5"
                                      d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div id="Group_2_">
                              <div id="Base_">
                                <svg class="Base_ba">
                                  <rect
                                    fill="rgba(255,255,255,1)"
                                    id="Base_ba"
                                    rx="0"
                                    ry="0"
                                    x="0"
                                    y="0"
                                    width="360"
                                    height="180"
                                  ></rect>
                                </svg>
                                <img id="o" src="o.png" srcset="o.png 1x, o@2x.png 2x"></img>
                              </div>
                              <div id="Mes_n_de_la_Iberia">
                                <span>Mesón de la Iberia</span>
                              </div>
                              <div id="Lorem_ipsum_dolor_sit_amet__ip_">
                                <span>
                                  Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                                  has appareat.
                                </span>
                              </div>
                              <div id="time_">
                                <div id="ID1h_ago">
                                  <span>1h ago</span>
                                </div>
                                <div id="time_ba">
                                  <svg class="Path_5_" viewBox="0 0 16 16">
                                    <path
                                      fill="rgba(203,208,211,1)"
                                      id="Path_5_"
                                      d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div id="Group_2_ba">
                              <div id="Base_bb">
                                <svg class="Base_bc">
                                  <rect
                                    fill="rgba(255,255,255,1)"
                                    id="Base_bc"
                                    rx="0"
                                    ry="0"
                                    x="0"
                                    y="0"
                                    width="360"
                                    height="180"
                                  ></rect>
                                </svg>
                                <img
                                  id="scherezade_santo_domingo_02"
                                  src="scherezade_santo_domingo_02.png"
                                  srcset="scherezade_santo_domingo_02.png 1x, scherezade_santo_domingo_02@2x.png 2x"
                                ></img>
                              </div>
                              <div id="Scherezade_Restaurante">
                                <span>Scherezade Restaurante</span>
                              </div>
                              <div id="Lorem_ipsum_dolor_sit_amet__ip_bf">
                                <span>
                                  Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                                  has appareat.
                                </span>
                              </div>
                              <div id="time_bg">
                                <div id="ID3h_ago">
                                  <span>3h ago</span>
                                </div>
                                <div id="time_bi">
                                  <svg class="Path_5_bj" viewBox="0 0 16 16">
                                    <path
                                      fill="rgba(203,208,211,1)"
                                      id="Path_5_bj"
                                      d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div id="Group_2_bk">
                              <div id="Base_bl">
                                <svg class="Base_bm">
                                  <rect
                                    fill="rgba(255,255,255,1)"
                                    id="Base_bm"
                                    rx="0"
                                    ry="0"
                                    x="0"
                                    y="0"
                                    width="360"
                                    height="180"
                                  ></rect>
                                </svg>
                                <img
                                  id="img07_03_2019_765081566"
                                  src="img07_03_2019_765081566.png"
                                  srcset="img07_03_2019_765081566.png 1x, img07_03_2019_765081566@2x.png 2x"
                                ></img>
                              </div>
                              <div id="Peperoni_Santo_Domingo">
                                <span>Peperoni Santo Domingo</span>
                              </div>
                              <div id="Lorem_ipsum_dolor_sit_amet__ip_bp">
                                <span>
                                  Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                                  has appareat.
                                </span>
                              </div>
                              <div id="time_bq">
                                <div id="ID3h_ago_br">
                                  <span>3h ago</span>
                                </div>
                                <div id="time_bs">
                                  <svg class="Path_5_bt" viewBox="0 0 16 16">
                                    <path
                                      fill="rgba(203,208,211,1)"
                                      id="Path_5_bt"
                                      d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="title">
                            <div id="RESTAURANTES">
                              <span>RESTAURANTES</span>
                            </div>
                            <div id="next___previous">
                              <div id="arrow">
                                <svg class="arrow_by" viewBox="0 0 10 6">
                                  <path
                                    fill="rgba(32,33,36,1)"
                                    id="arrow_by"
                                    d="M 5 6 C 4.699999809265137 6 4.5 5.900000095367432 4.300000190734863 5.699999809265137 L 0.300000011920929 1.700000047683716 C -0.09999999403953552 1.299999952316284 -0.09999999403953552 0.699999988079071 0.300000011920929 0.300000011920929 C 0.699999988079071 -0.09999996423721313 1.299999952316284 -0.09999999403953552 1.700000047683716 0.300000011920929 L 5 3.600000143051147 L 8.300000190734863 0.3000001311302185 C 8.699999809265137 -0.09999987483024597 9.300000190734863 -0.09999987483024597 9.699999809265137 0.3000001311302185 C 10.09999942779541 0.7000001072883606 10.09999942779541 1.300000190734863 9.699999809265137 1.700000047683716 L 5.699999809265137 5.699999809265137 C 5.5 5.900000095367432 5.300000190734863 6 5 6 Z"
                                  ></path>
                                </svg>
                              </div>
                              <div id="arrow_back" class="arrow_back">
                                <svg class="arrow_back_b" viewBox="0 0 10 6">
                                  <path
                                    fill="rgba(32,33,36,1)"
                                    id="arrow_back_b"
                                    d="M 5 6 C 4.699999809265137 6 4.5 5.900000095367432 4.300000190734863 5.699999809265137 L 0.300000011920929 1.700000047683716 C -0.09999999403953552 1.299999952316284 -0.09999999403953552 0.699999988079071 0.300000011920929 0.300000011920929 C 0.699999988079071 -0.09999996423721313 1.299999952316284 -0.09999999403953552 1.700000047683716 0.300000011920929 L 5 3.600000143051147 L 8.300000190734863 0.3000001311302185 C 8.699999809265137 -0.09999987483024597 9.300000190734863 -0.09999987483024597 9.699999809265137 0.3000001311302185 C 10.09999942779541 0.7000001072883606 10.09999942779541 1.300000190734863 9.699999809265137 1.700000047683716 L 5.699999809265137 5.699999809265137 C 5.5 5.900000095367432 5.300000190734863 6 5 6 Z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div onclick="application.goToTargetView(event)" id="more_news">
                        <svg class="Base_b">
                          <rect
                            fill="rgba(255,255,255,1)"
                            id="Base_b"
                            rx="0"
                            ry="0"
                            x="0"
                            y="0"
                            width="800"
                            height="521"
                          ></rect>
                        </svg>
                        <div id="title_b">
                          <div id="PROXIMAS_RESERVACIONES">
                            <span>PROXIMAS RESERVACIONES</span>
                          </div>
                          <div id="arrow_b">
                            <svg class="arrow_ca" viewBox="0 0 10 6">
                              <path
                                fill="rgba(32,33,36,1)"
                                id="arrow_ca"
                                d="M 5 6 C 4.699999809265137 6 4.5 5.900000095367432 4.300000190734863 5.699999809265137 L 0.300000011920929 1.700000047683716 C -0.09999999403953552 1.299999952316284 -0.09999999403953552 0.699999988079071 0.300000011920929 0.300000011920929 C 0.699999988079071 -0.09999996423721313 1.299999952316284 -0.09999999403953552 1.700000047683716 0.300000011920929 L 5 3.600000143051147 L 8.300000190734863 0.3000001311302185 C 8.699999809265137 -0.09999987483024597 9.300000190734863 -0.09999987483024597 9.699999809265137 0.3000001311302185 C 10.09999942779541 0.7000001072883606 10.09999942779541 1.300000190734863 9.699999809265137 1.700000047683716 L 5.699999809265137 5.699999809265137 C 5.5 5.900000095367432 5.300000190734863 6 5 6 Z"
                              ></path>
                            </svg>
                          </div>
                          <div id="arrow_back_ca" class="arrow_back">
                            <svg class="arrow_back_cb" viewBox="0 0 10 6">
                              <path
                                fill="rgba(32,33,36,1)"
                                id="arrow_back_cb"
                                d="M 5 6 C 4.699999809265137 6 4.5 5.900000095367432 4.300000190734863 5.699999809265137 L 0.300000011920929 1.700000047683716 C -0.09999999403953552 1.299999952316284 -0.09999999403953552 0.699999988079071 0.300000011920929 0.300000011920929 C 0.699999988079071 -0.09999996423721313 1.299999952316284 -0.09999999403953552 1.700000047683716 0.300000011920929 L 5 3.600000143051147 L 8.300000190734863 0.3000001311302185 C 8.699999809265137 -0.09999987483024597 9.300000190734863 -0.09999987483024597 9.699999809265137 0.3000001311302185 C 10.09999942779541 0.7000001072883606 10.09999942779541 1.300000190734863 9.699999809265137 1.700000047683716 L 5.699999809265137 5.699999809265137 C 5.5 5.900000095367432 5.300000190734863 6 5 6 Z"
                              ></path>
                            </svg>
                          </div>
                          <svg class="divider" viewBox="4427.847 210.677 380 2">
                            <path
                              fill="transparent"
                              stroke="rgba(235,237,237,1)"
                              stroke-width="2px"
                              stroke-linejoin="miter"
                              stroke-linecap="round"
                              stroke-miterlimit="4"
                              shape-rendering="auto"
                              id="divider"
                              d="M 4427.84716796875 210.6770782470703 L 4807.84716796875 210.6770782470703"
                            ></path>
                          </svg>
                        </div>
                        <div id="new">
                          <div id="new_cb">
                            <div id="Restaurant-Title-next-up">
                              <span>MESON DE LA CAVA</span>
                            </div>
                            <div id="Junta_ejecutiva">
                              <span>Junta ejecutiva</span>
                            </div>
                            <div id="Lorem_ipsum_dolor_sit_amet__ip_ce">
                              <span>
                                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                                has appareat…
                              </span>
                            </div>
                            <div id="time_cf">
                              <div id="DateStyle">
                                <span>Lunes 24 de Febrero 2020</span>
                              </div>
                              <div id="time_ch">
                                <svg class="Path_5_ci" viewBox="0 0 16 16">
                                  <path
                                    fill="rgba(203,208,211,1)"
                                    id="Path_5_ci"
                                    d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div id="new_cj">
                            <div id="Restaurant-Title-next-up">
                              <span>MESON DE LA IBERIA</span>
                            </div>
                            <div id="Junta_ejecutiva_cl">
                              <span>Junta ejecutiva</span>
                            </div>
                            <div id="Lorem_ipsum_dolor_sit_amet__ip_cm">
                              <span>
                                Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad
                                has appareat…
                              </span>
                            </div>
                            <div id="time_cn">
                              <div id="DateStyle">
                                <span>Sabado 22 de Febrero 2020</span>
                              </div>
                              <div id="time_cp">
                                <svg class="Path_5_cq" viewBox="0 0 16 16">
                                  <path
                                    fill="rgba(203,208,211,1)"
                                    id="Path_5_cq"
                                    d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="right_column">
                        <div id="next___previous_cs">
                          <div id="arrow_ct">
                            <svg class="arrow_cu" viewBox="0 0 10 6">
                              <path
                                fill="rgba(32,33,36,1)"
                                id="arrow_cu"
                                d="M 5 6 C 4.699999809265137 6 4.5 5.900000095367432 4.300000190734863 5.699999809265137 L 0.300000011920929 1.700000047683716 C -0.09999999403953552 1.299999952316284 -0.09999999403953552 0.699999988079071 0.300000011920929 0.300000011920929 C 0.699999988079071 -0.09999996423721313 1.299999952316284 -0.09999999403953552 1.700000047683716 0.300000011920929 L 5 3.600000143051147 L 8.300000190734863 0.3000001311302185 C 8.699999809265137 -0.09999987483024597 9.300000190734863 -0.09999987483024597 9.699999809265137 0.3000001311302185 C 10.09999942779541 0.7000001072883606 10.09999942779541 1.300000190734863 9.699999809265137 1.700000047683716 L 5.699999809265137 5.699999809265137 C 5.5 5.900000095367432 5.300000190734863 6 5 6 Z"
                              ></path>
                            </svg>
                          </div>
                          <div id="arrow_back_cv" class="arrow_back">
                            <svg class="arrow_back_cw" viewBox="0 0 10 6">
                              <path
                                fill="rgba(32,33,36,1)"
                                id="arrow_back_cw"
                                d="M 5 6 C 4.699999809265137 6 4.5 5.900000095367432 4.300000190734863 5.699999809265137 L 0.300000011920929 1.700000047683716 C -0.09999999403953552 1.299999952316284 -0.09999999403953552 0.699999988079071 0.300000011920929 0.300000011920929 C 0.699999988079071 -0.09999996423721313 1.299999952316284 -0.09999999403953552 1.700000047683716 0.300000011920929 L 5 3.600000143051147 L 8.300000190734863 0.3000001311302185 C 8.699999809265137 -0.09999987483024597 9.300000190734863 -0.09999987483024597 9.699999809265137 0.3000001311302185 C 10.09999942779541 0.7000001072883606 10.09999942779541 1.300000190734863 9.699999809265137 1.700000047683716 L 5.699999809265137 5.699999809265137 C 5.5 5.900000095367432 5.300000190734863 6 5 6 Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div id="new_cx">
                          <div id="RESTAURANTE_TRATTORIA_BOCCELLI">
                            <span>RESTAURANTE TRATTORIA BOCCELLI</span>
                          </div>
                          <img
                            id="img22_09_2017_1135648597"
                            src="img22_09_2017_1135648597.png"
                            srcset="img22_09_2017_1135648597.png 1x, img22_09_2017_1135648597@2x.png 2x"
                          ></img>
                          <div id="time_c">
                            <div id="ID3h_ago_by_Worldnews">
                              <span>3h ago by </span>
                              <span>Worldnews</span>
                            </div>
                            <div id="time_da">
                              <svg class="Path_5_c" viewBox="0 0 16 16">
                                <path
                                  fill="rgba(203,208,211,1)"
                                  id="Path_5_c"
                                  d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div id="new_c">
                          <div id="RESTAURANTE_DON_PEPE">
                            <span>RESTAURANTE DON PEPE</span>
                          </div>
                          <img
                            id="filename_img_2456_jpg"
                            src="filename_img_2456_jpg.png"
                            srcset="filename_img_2456_jpg.png 1x, filename_img_2456_jpg@2x.png 2x"
                          ></img>
                
                          <div id="time_db">
                            <div id="ID4h_ago_by_Days">
                              <span>4h ago by </span>
                              <span>Days</span>
                            </div>
                            <div id="time_dc">
                              <svg class="Path_5_da" viewBox="0 0 16 16">
                                <path
                                  fill="rgba(203,208,211,1)"
                                  id="Path_5_da"
                                  d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div id="new_db">
                          <div id="MUELLE_47___SEAFOOD_CULTURE">
                            <span>MUELLE 47 - SEAFOOD CULTURE</span>
                          </div>
                          <img
                            id="photo0jpg"
                            src="photo0jpg.png"
                            srcset="photo0jpg.png 1x, photo0jpg@2x.png 2x"
                          ></img>
                          <div id="time_de">
                            <div id="ID3h_ago_by_Monica">
                              <span>3h ago by </span>
                              <span>Monica</span>
                            </div>
                            <div id="time_dg">
                              <svg class="Path_5_dh" viewBox="0 0 16 16">
                                <path
                                  fill="rgba(203,208,211,1)"
                                  id="Path_5_dh"
                                  d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="big_new">
                        <img
                          id="Image_dj"
                          src="Image_dj.png"
                          srcset="Image_dj.png 1x, Image_dj@2x.png 2x"
                        ></img>
                        <div id="info">
                          <div id="Lorem_ipsum_dolor_sit_amet__in">
                            <span>
                              Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                              detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum
                              vis eu, inermis eloquentiam.
                            </span>
                          </div>
                          <div id="MILA_RESTAURANTE">
                            <span>MILA RESTAURANTE</span>
                          </div>
                          <div id="time_dn">
                            <div id="ID2m_ago_do">
                              <span>2m ago</span>
                            </div>
                            <div id="time_dp">
                              <svg class="Path_5_dq" viewBox="0 0 16 16">
                                <path
                                  fill="rgba(203,208,211,1)"
                                  id="Path_5_dq"
                                  d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div id="Santo_Domingo">
                          <span>Santo Domingo</span>
                        </div>
                      </div>
                      <div id="big_new_ds">
                        <img
                          id="Image_dt"
                          src="Image_dt.png"
                          srcset="Image_dt.png 1x, Image_dt@2x.png 2x"
                        ></img>
                        <div id="info_du">
                          <div id="Lorem_ipsum_dolor_sit_amet__in_dv">
                            <span>
                              Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                              detracto, vidit vituperatoribus duo id. Affert detraxit voluptatum
                              vis eu, inermis eloquentiam.
                            </span>
                          </div>
                          <div id="LA_LOCANDA_BELLA_VISTA">
                            <span>LA LOCANDA BELLA VISTA</span>
                          </div>
                          <div id="time_dx">
                            <div id="ID2m_ago_dy">
                              <span>2m ago</span>
                            </div>
                            <div id="time_dz">
                              <svg class="Path_5_d" viewBox="0 0 16 16">
                                <path
                                  fill="rgba(203,208,211,1)"
                                  id="Path_5_d"
                                  d="M 8 0 C 3.599999904632568 0 0 3.599999904632568 0 8 C 0 12.39999961853027 3.599999904632568 16 8 16 C 12.39999961853027 16 16 12.39999961853027 16 8 C 16 3.600000381469727 12.39999961853027 0 8 0 Z M 8 14 C 4.699999809265137 14 2 11.30000019073486 2 8 C 2 4.699999809265137 4.699999809265137 2 8 2 C 11.30000019073486 2 14 4.699999809265137 14 8 C 14 11.30000019073486 11.30000019073486 14 8 14 Z M 9 7.599999904632568 L 11.69999980926514 10.30000019073486 L 10.30000019073486 11.69999980926514 L 7 8.399999618530273 L 7 3 L 9 3 L 9 7.599999904632568 Z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div id="TRAVEL">
                          <span>TRAVEL</span>
                        </div>
                      </div>
                      <div id="Footer" class="Footer">
                        <svg class="base">
                          <rect
                            fill="rgba(166,173,180,1)"
                            id="base"
                            rx="0"
                            ry="0"
                            x="0"
                            y="0"
                            width="1920"
                            height="155"
                          ></rect>
                        </svg>
                        <div id="main">
                          <div id="INICIO">
                            <span>INICIO</span>
                          </div>
                          <div id="LINEAMIENTOS">
                            <span>LINEAMIENTOS</span>
                          </div>
                          <div id="AYUDA">
                            <span>AYUDA</span>
                          </div>
                          <div id="CONTACTO">
                            <span>CONTACTO</span>
                          </div>
                          <div id="SOBRE_NOSOTROS">
                            <span>SOBRE NOSOTROS</span>
                          </div>
                          <div id="ANUNCIOS">
                            <span>ANUNCIOS</span>
                          </div>
                          <Image id="Logo_Fondo_Blanco" src={Logo} />
                        </div>
                        <div id="subscribe">
                          <svg class="field">
                            <rect
                              fill="transparent"
                              stroke="rgba(255,255,255,1)"
                              stroke-width="2px"
                              stroke-linejoin="miter"
                              stroke-linecap="butt"
                              stroke-miterlimit="4"
                              shape-rendering="auto"
                              id="field"
                              rx="6"
                              ry="6"
                              x="0"
                              y="0"
                              width="349"
                              height="40"
                            ></rect>
                          </svg>
                          <div id="send">
                            <svg class="send_ef" viewBox="0 0 16 16">
                              <path
                                fill="rgba(255,255,255,1)"
                                id="send_ef"
                                d="M 10 16 L 8 8 L 0 6 L 16 0 L 10 16 Z"
                              ></path>
                            </svg>
                          </div>
                          <div id="Email">
                            <span>Email</span>
                          </div>
                          <div id="Mantente_en_contacto_con_nosot">
                            <span>Mantente en contacto con nosotros</span>
                          </div>
                        </div>
                        <div id="Social">
                          <div id="web" class="web">
                            <svg class="Path_4" viewBox="0 0 16 16">
                              <path
                                fill="rgba(255,255,255,1)"
                                id="Path_4"
                                d="M 2.400000095367432 2.400000095367432 C 3.866666793823242 0.8000000715255737 5.733333587646484 0 8 0 C 10.26666641235352 0 12.13333415985107 0.8000000715255737 13.60000038146973 2.400000095367432 C 15.19999980926514 3.866666793823242 16 5.733333587646484 16 8 C 16 10.26666641235352 15.19999980926514 12.13333415985107 13.60000038146973 13.60000038146973 C 12.13333415985107 15.19999980926514 10.26666641235352 16 8 16 C 5.733333587646484 16 3.866666793823242 15.19999980926514 2.400000333786011 13.60000038146973 C 0.9333337545394897 12 0 10.26666641235352 0 8 C 0 5.733333587646484 0.8000000715255737 3.866666793823242 2.400000095367432 2.400000095367432 Z M 9.066667556762695 14.40000057220459 C 9.600000381469727 14.40000057220459 10.26666736602783 14 11.0666675567627 13.20000076293945 C 11.60000038146973 12.26666641235352 12 11.33333396911621 12 10.40000057220459 C 12 9.733333587646484 11.73333358764648 9.200000762939453 11.33333396911621 8.80000114440918 C 10.80000114440918 8.266666412353516 10.26666641235352 8 9.600000381469727 8 L 8.266666412353516 8 C 7.866666793823242 8 7.466666698455811 7.866666793823242 7.066667079925537 7.733333587646484 C 6.800000190734863 7.466666698455811 6.666666984558105 7.200000286102295 6.666666984558105 6.800000190734863 C 6.666666984558105 6.533333778381348 6.800000190734863 6.399999618530273 6.933333396911621 6.266666412353516 C 7.066666603088379 6.133333206176758 7.333333492279053 6 7.466666698455811 6 C 7.599999904632568 6 8 6.133333206176758 8.133333206176758 6.40000057220459 C 8.40000057220459 6.533333778381348 8.533333778381348 6.666666984558105 8.666666984558105 6.666666984558105 C 8.800000190734863 6.666666984558105 9.066667556762695 6.666666984558105 9.200000762939453 6.533333778381348 C 9.333333969116211 6.40000057220459 9.333333969116211 6.133333206176758 9.333333969116211 6 C 9.333333969116211 5.599999904632568 9.066667556762695 5.066666603088379 8.666666984558105 4.666666984558105 C 9.066667556762695 3.866666793823242 9.333333969116211 3.066666603088379 9.333333969116211 2.133333444595337 C 9.333333969116211 2 9.200000762939453 1.866666674613953 9.066667556762695 1.866666674613953 C 8.666666984558105 1.733333349227905 8.266666412353516 1.600000143051147 8 1.600000143051147 C 6.533333778381348 1.733333349227905 5.466666698455811 2 4.533333778381348 2.666666746139526 C 3.733333349227905 3.333333492279053 3.333333492279053 4.266666889190674 3.333333492279053 5.333333492279053 C 3.333333492279053 6.40000057220459 3.733333349227905 7.200000286102295 4.400000095367432 7.866666793823242 C 5.066666603088379 8.533333778381348 6 8.933334350585938 6.933333396911621 8.933334350585938 L 6.933333396911621 8.933334350585938 C 6.933333396911621 9.066667556762695 6.933333396911621 9.333333969116211 6.933333396911621 9.466667175292969 C 6.933333396911621 10.00000095367432 7.066666603088379 10.40000057220459 7.466666698455811 10.80000114440918 C 7.733333110809326 11.20000076293945 8.133333206176758 11.46666717529297 8.666666984558105 11.60000133514404 L 8.666666984558105 14.00000190734863 C 8.666666984558105 14.13333511352539 8.666666984558105 14.13333511352539 8.800000190734863 14.26666831970215 C 8.933333396911621 14.40000057220459 8.933333396911621 14.40000057220459 9.066667556762695 14.40000057220459 Z"
                              ></path>
                            </svg>
                          </div>
                          <div id="instagram" class="instagram">
                            <svg class="Path_3" viewBox="0 0 16 16">
                              <path
                                fill="rgba(255,255,255,1)"
                                id="Path_3"
                                d="M 8 1.422222256660461 C 10.13333320617676 1.422222256660461 10.39999961853027 1.422222256660461 11.20000076293945 1.51111114025116 C 12 1.51111114025116 12.44444465637207 1.688889026641846 12.71111106872559 1.777777791023254 C 13.06666660308838 1.955555558204651 13.33333301544189 2.133333444595337 13.60000038146973 2.400000095367432 C 13.86666679382324 2.666666746139526 14.0444450378418 2.9333336353302 14.22222232818604 3.288888931274414 C 14.31111145019531 3.555555582046509 14.48888874053955 4 14.48888874053955 4.800000190734863 C 14.48888874053955 5.600000381469727 14.57777786254883 5.8666672706604 14.57777786254883 8 C 14.57777786254883 10.13333320617676 14.57777786254883 10.39999961853027 14.48888874053955 11.20000076293945 C 14.48888874053955 12 14.31110954284668 12.44444465637207 14.22222137451172 12.71111106872559 C 14.04444408416748 13.06666660308838 13.86666584014893 13.33333301544189 13.59999942779541 13.60000038146973 C 13.33333301544189 13.86666679382324 13.06666564941406 14.0444450378418 12.71111011505127 14.22222232818604 C 12.44444370269775 14.31111145019531 11.99999904632568 14.48888874053955 11.19999980926514 14.48888874053955 C 10.39999961853027 14.48888874053955 10.13333320617676 14.57777786254883 8 14.57777786254883 C 5.866666793823242 14.57777786254883 5.600000381469727 14.57777786254883 4.800000190734863 14.48888874053955 C 4 14.48888874053955 3.555555582046509 14.31110954284668 3.288888931274414 14.22222137451172 C 2.933333396911621 14.04444408416748 2.666666746139526 13.86666584014893 2.400000095367432 13.59999942779541 C 2.133333444595337 13.33333301544189 1.955555558204651 13.06666564941406 1.777777791023254 12.71111011505127 C 1.688888907432556 12.44444370269775 1.51111114025116 11.99999904632568 1.51111114025116 11.19999980926514 C 1.51111114025116 10.39999961853027 1.422222256660461 10.13333320617676 1.422222256660461 8 C 1.422222256660461 5.866666793823242 1.422222256660461 5.600000381469727 1.51111114025116 4.800000190734863 C 1.51111114025116 4 1.688888907432556 3.555555582046509 1.777777791023254 3.288888931274414 C 1.955555558204651 2.933333396911621 2.133333444595337 2.666666746139526 2.400000095367432 2.400000095367432 C 2.666666746139526 2.04444432258606 2.933333396911621 1.866666555404663 3.288888931274414 1.777777791023254 C 3.555555582046509 1.688888907432556 4 1.51111114025116 4.800000190734863 1.51111114025116 C 5.600000381469727 1.422222256660461 5.866666793823242 1.422222256660461 8 1.422222256660461 M 8 0 C 5.866666793823242 0 5.511110782623291 0 4.711111545562744 0.08888889104127884 C 3.822222471237183 0.08888889104127884 3.288889169692993 0.2666666805744171 2.755555629730225 0.4444444477558136 C 2.222222328186035 0.6222222447395325 1.777777791023254 0.8888888955116272 1.333333373069763 1.333333373069763 C 0.8888888955116272 1.777777791023254 0.6222222447395325 2.222222328186035 0.4444444477558136 2.755555391311646 C 0.1777777820825577 3.288888931274414 0.08888889104127884 3.822222471237183 0.08888889104127884 4.711111545562744 C 0 5.511110782623291 0 5.866666793823242 0 8 C 0 10.13333320617676 0 10.48888874053955 0.08888889104127884 11.28888893127441 C 0.08888889104127884 12.17777729034424 0.2666666805744171 12.71111106872559 0.4444444477558136 13.24444389343262 C 0.6222222447395325 13.77777767181396 0.8888888955116272 14.22222232818604 1.333333373069763 14.66666698455811 C 1.777777791023254 15.11111164093018 2.222222328186035 15.37777709960938 2.755555391311646 15.55555534362793 C 3.288888692855835 15.7333345413208 3.822222471237183 15.91111087799072 4.711111545562744 15.91111087799072 C 5.511110782623291 16 5.866666793823242 16 8 16 C 10.13333320617676 16 10.48888874053955 16 11.28888893127441 15.91111087799072 C 12.17777729034424 15.91111087799072 12.71111106872559 15.73333263397217 13.24444389343262 15.55555534362793 C 13.77777767181396 15.37777709960938 14.22222232818604 15.11111164093018 14.66666698455811 14.66666698455811 C 15.11111164093018 14.22222232818604 15.37777709960938 13.77777767181396 15.55555534362793 13.24444389343262 C 15.7333345413208 12.71111011505127 15.91111087799072 12.17777729034424 15.91111087799072 11.28888893127441 C 15.91111087799072 10.39999961853027 16 10.13333320617676 16 8 C 16 5.866666793823242 16 5.511110782623291 15.91111087799072 4.711111545562744 C 15.91111087799072 3.822222471237183 15.73333263397217 3.288889169692993 15.55555534362793 2.755555629730225 C 15.37777709960938 2.222222328186035 15.11111164093018 1.777777791023254 14.66666698455811 1.333333492279053 C 14.22222232818604 0.8888890147209167 13.77777767181396 0.6222223043441772 13.24444389343262 0.4444445669651031 C 12.71111011505127 0.2666667997837067 12.17777729034424 0.0888889878988266 11.28888893127441 0.0888889878988266 C 10.48888874053955 0 10.13333320617676 0 8 0 M 8 3.911111116409302 C 5.688889026641846 3.911111116409302 3.911111116409302 5.688889026641846 3.911111116409302 8 C 3.911111116409302 10.31111145019531 5.777777671813965 12.08888912200928 8 12.08888912200928 C 10.31111145019531 12.08888912200928 12.08888912200928 10.22222232818604 12.08888912200928 8 C 12.08888912200928 5.777777671813965 10.31111145019531 3.911111116409302 8 3.911111116409302 M 8 10.66666698455811 C 6.488889217376709 10.66666698455811 5.333333492279053 9.511111259460449 5.333333492279053 8 C 5.333333492279053 6.488889217376709 6.488889217376709 5.333333492279053 8 5.333333492279053 C 9.511111259460449 5.333333492279053 10.66666698455811 6.488889217376709 10.66666698455811 8 C 10.66666698455811 9.511111259460449 9.511111259460449 10.66666698455811 8 10.66666698455811 M 12.26666736602783 2.755555391311646 C 11.73333358764648 2.755555391311646 11.28888893127441 3.200000047683716 11.28888893127441 3.733333110809326 C 11.28888893127441 4.266666412353516 11.73333358764648 4.711111068725586 12.26666736602783 4.711111068725586 C 12.80000019073486 4.711111068725586 13.24444484710693 4.266666412353516 13.24444484710693 3.733333110809326 C 13.24444389343262 3.200000047683716 12.80000019073486 2.755555391311646 12.26666736602783 2.755555391311646"
                              ></path>
                            </svg>
                          </div>
                          <div id="twitter" class="twitter">
                            <svg class="Rectangle_393">
                              <rect
                                fill="transparent"
                                id="Rectangle_393"
                                rx="0"
                                ry="0"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              ></rect>
                            </svg>
                            <svg class="Path_2" viewBox="38 2 16 12.978">
                              <path
                                fill="rgba(255,255,255,1)"
                                id="Path_2"
                                d="M 43.06666564941406 14.97777557373047 C 49.11111068725586 14.97777557373047 52.39999771118164 9.999998092651367 52.39999771118164 5.644444465637207 C 52.39999771118164 5.466666698455811 52.39999771118164 5.377777576446533 52.39999771118164 5.199999809265137 C 53.02222061157227 4.755555629730225 53.5555534362793 4.133333683013916 53.99999618530273 3.51111102104187 C 53.37777328491211 3.777777910232544 52.75555038452148 3.955555438995361 52.13333129882812 4.044444561004639 C 52.84444427490234 3.599999904632568 53.28888702392578 2.977777719497681 53.5555534362793 2.266666889190674 C 52.93333053588867 2.622222185134888 52.22222137451172 2.888888597488403 51.5111083984375 3.066666603088379 C 50.88888549804688 2.355555534362793 49.99999618530273 2 49.11111068725586 2 C 47.33333206176758 2 45.82221984863281 3.511110782623291 45.82221984863281 5.288888454437256 C 45.82221984863281 5.555554866790771 45.82221984863281 5.822221279144287 45.91110610961914 5.999999523162842 C 43.15555572509766 5.822221755981445 40.75555419921875 4.57777738571167 39.15555572509766 2.53333306312561 C 38.88888931274414 2.977777481079102 38.71110916137695 3.599999666213989 38.71110916137695 4.222221851348877 C 38.71110916137695 5.377777576446533 39.33333206176758 6.355555057525635 40.13333129882812 6.977777004241943 C 39.59999847412109 6.977777004241943 39.06666564941406 6.799999237060547 38.62221908569336 6.533332824707031 C 38.62221908569336 6.533332824707031 38.62221908569336 6.533332824707031 38.62221908569336 6.533332824707031 C 38.62221908569336 8.133332252502441 39.77777481079102 9.46666431427002 41.28888702392578 9.733331680297852 C 41.02222061157227 9.822220802307129 40.75555419921875 9.822220802307129 40.39999771118164 9.822220802307129 C 40.22221755981445 9.822220802307129 39.95555114746094 9.822220802307129 39.77777481079102 9.733331680297852 C 40.22221755981445 11.06666469573975 41.37777328491211 11.95555305480957 42.88888549804688 12.04444122314453 C 41.73332977294922 12.93333053588867 40.31110763549805 13.46666431427002 38.79999923706055 13.46666431427002 C 38.53333282470703 13.46666431427002 38.26666641235352 13.46666431427002 37.99999618530273 13.37777423858643 C 39.42222213745117 14.44444179534912 41.19999694824219 14.97777557373047 43.06666564941406 14.97777557373047"
                              ></path>
                            </svg>
                          </div>
                          <div id="facebook" class="facebook">
                            <svg class="Rectangle_392">
                              <rect
                                fill="transparent"
                                id="Rectangle_392"
                                rx="0"
                                ry="0"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              ></rect>
                            </svg>
                            <svg class="Path_1" viewBox="80 0 8.356 16">
                              <path
                                fill="rgba(255,255,255,1)"
                                id="Path_1"
                                d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195312 0 86.13333129882812 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div id="Hero">
                        <div id="Main_eu">
                          <img
                            id="Image_ev"
                            src="Image_ev.png"
                            srcset="Image_ev.png 1x, Image_ev@2x.png 2x"
                          ></img>
                          <div id="Title_ew">
                            <div id="Que_siempre_estes_comodo_es_nu">
                              <span>Que siempre estes comodo es nuestra responsabilidad</span>
                            </div>
                            <div id="Selecciona_el_restaurante_y_tu">
                              <span>Selecciona el restaurante y tu mesa de preferencia</span>
                            </div>
                            <div id="Primary_Button">
                              <svg class="base_e">
                                <rect
                                  fill="rgba(250,105,128,1)"
                                  id="base_e"
                                  rx="6"
                                  ry="6"
                                  x="0"
                                  y="0"
                                  width="134"
                                  height="40"
                                ></rect>
                              </svg>
                              <div id="REALIZAR_RESERVAR">
                                <span>REALIZAR RESERVAR</span>
                              </div>
                            </div>
                            <div id="Header">
                              <div id="BIENVENIDA">
                                <span>BIENVENIDA</span>
                              </div>
                              <svg class="divider_e" viewBox="4427.848 210.677 626.373 2">
                                <path
                                  fill="transparent"
                                  stroke="rgba(255,255,255,1)"
                                  stroke-width="2px"
                                  stroke-linejoin="miter"
                                  stroke-linecap="round"
                                  stroke-miterlimit="4"
                                  shape-rendering="auto"
                                  id="divider_e"
                                  d="M 4427.84765625 210.6770782470703 L 5054.22021484375 210.6770782470703"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="Header___Desktop" class="Header___Desktop">
                        <svg class="base_fa">
                          <rect
                            fill="rgba(246,248,249,1)"
                            id="base_fa"
                            rx="0"
                            ry="0"
                            x="0"
                            y="0"
                            width="1920"
                            height="76"
                          ></rect>
                        </svg>
                        <div id="INICIO_e">
                          <span>INICIO</span>
                        </div>
                        <div id="RESTAURANTES_e">
                          <span>RESTAURANTES</span>
                        </div>
                        <div id="PERFIL">
                          <span>PERFIL</span>
                        </div>
                        <div onclick="application.goToTargetView(event)" id="Salir">
                          <span>Salir</span>
                        </div>
                        <div onclick="application.goToTargetView(event)" id="MIS_RESERVACIONES">
                          <span>MIS RESERVACIONES</span>
                        </div>
                        <img id="UserPhoto" src="../assets/img/account.png"></img>
                        <Image className="forheader" src={Logo} />
                      </div>
                      <img
                        id="Image_fe"
                        src="Image_fe.png"
                        srcset="Image_fe.png 1x, Image_fe@2x.png 2x"
                      />
                      <div id="Default_2" class="Default_2">
                        <svg class="Field_fg">
                          <rect
                            fill="rgba(255,255,255,1)"
                            stroke="rgba(235,237,237,1)"
                            stroke-width="2px"
                            stroke-linejoin="miter"
                            stroke-linecap="butt"
                            stroke-miterlimit="4"
                            shape-rendering="auto"
                            id="Field_fg"
                            rx="6"
                            ry="6"
                            x="0"
                            y="0"
                            width="933"
                            height="40"
                          ></rect>
                        </svg>
                        <div id="Restaurante">
                          <span>Restaurante</span>
                        </div>
                      </div>
                    </div>
                  )
            }

            
        }   
        </Consumer>
       
    )
}

export default Home

