import React, { useEffect, Fragment } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector((store) => {
    return store.allJobs;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <Fragment>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </Fragment>
  );
};

export default Stats;
