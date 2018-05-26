import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
    {props.repos.map((repo,i) => {
    	return <div>{props.repos[i].repo}</div>
    })}
    </div>
  </div>
)

export default RepoList;