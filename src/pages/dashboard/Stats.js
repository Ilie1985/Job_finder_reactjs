import React, { useEffect, Fragment } from "react";
import { StatsContainer, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const {  monthlyApplications } = useSelector((store) => {
    return store.allJobs;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </Fragment>
  );
};

export default Stats;
