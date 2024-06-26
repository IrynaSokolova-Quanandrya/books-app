import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsReFreshing } from "../redux/auth/selectors";
import { fetchBooksSelected } from "../redux/training/operation";




const TrainingRouter = ({component: Component, redirectTo }) => {
  const isStarted = useSelector(state => state.training.trainingBD.isStarted);
  const dispatch = useDispatch();

  return isStarted ? <Navigate to={redirectTo} /> : <Component />;
};

export default TrainingRouter;