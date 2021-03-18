import React from 'react'
import {useParams} from 'react-router-dom'


export default function Topic() {
  let { topicId } = useParams();

  return (
    <div className="w-50 text-center m-auto">
      <h3>{topicId}</h3>
    </div>
  );
}

