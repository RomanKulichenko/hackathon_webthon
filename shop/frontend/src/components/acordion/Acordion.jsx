import React, {useContext, useState} from 'react';
import {Context} from "../../Context";
import './acordion.css'

export default function Acordion({category}) {
    const [one, two] = category;
    const [closeCategory, setCloseCategory] = useState(false);
    const [closeCategoryTwo, setcloseCategoryTwo] = useState(false);
    const [, setSortValue] = useContext(Context);
    const [active, setActive] = useState('');

    const handleClick = (e) => {
        const val = e.target.value;
        setActive(val);
        setSortValue(val);
    };
    return (
        <div>
            <div>
                <p className={'acordionLogo'} onClick={() => {
                    setCloseCategory(!closeCategory)
                }}>{one.sortBy}</p>
                {
                    closeCategory &&
                    <div>
                        <div className="custom-radio">
                            <label form={one.acordionName}>
                                <input name="typeSort" type="radio" onChange={handleClick}
                                       checked={active === `${one.sortByLabel}=high_to_low`}
                                       id={one.acordionName} value={`${one.sortByLabel}=high_to_low`}
                                       defaultChecked={false}
                                       className="custom-radio"/>

                                <div className="custom-radio__label">
                                    Від вищої до найнижчої
                                </div>
                            </label>
                        </div>
                        <div className="clear"></div>

                        <div className="custom-radio">
                            <label form={one.acordionName}>
                                <input className="custom-radio" checked={active === `${one.sortByLabel}=low_to_high`}
                                       onChange={handleClick} name="typeSort" id={one.acordionName}
                                       value={`${one.sortByLabel}=low_to_high`} type="radio" id={one.acordionName}
                                       defaultChecked={false}/>
                                <div className="custom-radio__label">
                                    Від нижчої до вищої
                                </div>
                            </label>
                        </div>
                        <div className="clear"></div>
                    </div>

                }
            </div>

            <div>
                <p className={'acordionLogo'} onClick={() => {
                    setcloseCategoryTwo(!closeCategoryTwo)
                }}>{two.sortBy}</p>
                {
                    closeCategoryTwo &&
                    <div>
                        <div className="custom-radio">
                            <label form={two.acordionName}>
                                <input name="typeSort" className="custom-radio" type="radio" onChange={handleClick}
                                       checked={active === `${two.sortByLabel}=high_to_low`}
                                       id={two.acordionName} value={`${two.sortByLabel}=high_to_low`}
                                       defaultChecked={false}/>

                                <div className="custom-radio__label">
                                    Від вищої до найнижчої
                                </div>
                            </label>
                        </div>
                        <div className="clear"></div>


                        <div className="custom-radio">
                            <label form={two.acordionName}>
                                <input checked={active === `${two.sortByLabel}=low_to_high`}
                                       className="custom-radio"
                                       onChange={handleClick} name="typeSort" id={two.acordionName}
                                       value={`${two.sortByLabel}=low_to_high`} type="radio" id={two.acordionName}
                                       defaultChecked={false}/>

                                <div className="custom-radio__label">
                                    Від нижчої до вищої
                                </div>
                            </label>
                        </div>
                        <div className="clear"></div>
                    </div>
                }
            </div>
        </div>
    )
}



