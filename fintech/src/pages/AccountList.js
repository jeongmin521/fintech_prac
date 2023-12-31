import React, { useEffect, useState } from "react";
import MainAccountCard from "../components/list/MainAccountCard";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

const AccountList = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log("data");
    getAccountList();
  }, []);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken")
    const user_seq_no = localStorage.getItem("userSeqNo")
    let requestOption = {
      url: "/v2.0/user/me",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        user_seq_no: "1101038117",
      },
    };

    axios(requestOption).then((response) => {
      console.log(response);
      setAccountList(response.data.res_list);
    });
  };

  return (
    <div>
      <HeaderComponent title={"계좌조회"}></HeaderComponent>
      {accountList.map((account) => {
        return (
          <MainAccountCard
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></MainAccountCard>
        );
      })}
    </div>
  );
};

export default AccountList;