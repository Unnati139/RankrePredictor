import { FormLabel} from '@mui/material'
import { Input, Radio } from 'antd';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { PredictionList } from '../Json/Prediction';
import { FaceRetouchingNaturalOutlined } from '@mui/icons-material';

const PredictionForm = () => {
    const [value, setValue] = useState("score");
    const [mark, setMark] = useState(0);
    const [predicted, setpredicted] = useState(false);
    const [rank1, setRank1] = useState(0);
    const [rank2, setRank2] = useState(0);


    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
      const rankPredictor = () => {
            setpredicted(true);
            checkRank();
      };
      const runAgain = () => {
            setpredicted(false);
            setMark(0);
      };
      const randomIntFromInterval=(min,max) => {
          let r1 = Math.floor(Math.random() * (max - min + 1) + min);
          let r2 = Math.floor(Math.random() * (max - min + 1) + min);
          if((r1==r2)) {
              let r1 = r1 + 1;
          }
          setRank1(r1);
          setRank2(r2);
      }
      const checkRank=() => {
          PredictionList.map((v,i)=>
            mark > v.minPercentile && 
            mark < v.maxPercentile && 
            randomIntFromInterval(v.minRank,v.maxRank)
            );
      }


    return (
        <>
           {!predicted ? <> <div style={{ display:"flex",flexDirection:"column"}}>
                <FormLabel className="input_box_input_label">
                    Select any one
                </FormLabel>
                <Radio.Group
                    onChange={onChange}
                    value={value}
                    style={{marginTop:8}}
                >
                    <Radio value="score">Score</Radio>
                    <Radio value="percentile">Percentile</Radio>
                </Radio.Group>
                <div className="flexCenter">
                    <select class="form-select" aria-label="Default select example" 
                    style={{width:"48%",marginTop:20,borderRadius:10,marginRight:15}}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                    <select class="form-select" aria-label="Default select example" 
                    style={{width:"48%",marginTop:20,borderRadius:10}}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                <div style={{marginTop:20}}>
                    <FormLabel className="input_box_input_label">
                        Enter your marks
                    </FormLabel>
                    <Input 
                        onChange={(e) => setMark(e.target.value)}
                        placeholder='Input your marks'
                        style={{borderRadius:10,marginTop:2}}
                        value={mark}
                    />
                </div>
            </div>
            <div className="flexCenter" style={{marginTop: 40,borderRadius:20}}>
                <Button 
                    variant="outlined"
                    color="secondary"
                    style={{borderRadius:20}}
                    onClick={rankPredictor}
                    disabled={mark == 0}>
                    Predict my rank
                </Button>
            </div>
            </>:(
                <>
                    {" "}
                    
                    <h2> your rank is:<br />
                    {rank1 > rank2 ? <div> {rank2} - {rank1} </div> :<div> {rank1} - {rank2}</div>}
                    </h2>
                    <div className="flexCenter" style={{marginTop: 40,borderRadius:20}}>
                        <Button 
                            variant="outlined"
                            color="secondary"
                            style={{borderRadius:20}}
                            onClick={()=> runAgain()}
                            disabled={mark == 0}>
                            Use Again
                        </Button>
                    </div>
                </>
            )}
        </>
    )
}

export default PredictionForm
