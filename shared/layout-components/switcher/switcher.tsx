"use client";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";

const Switcher = ({ ThemeChanger }: any) => {
  useEffect(() => {
    switcherdata.LocalStorageBackup(ThemeChanger);
  }, []);

  return null;
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Switcher);
