import React from 'react';

export default function Composition() {
  return (
    <div>
      <h1>Compo</h1>
      <TitleBar>
        <h1>This is</h1>
        <p>Composition</p>
        <h2>
          <span>D</span>ream <span>D</span>rive <span>Live </span> !
        </h2>
      </TitleBar>
    </div>
  );
}

/**
 * When a component dont know all of its childern we use
 * Composition to add childern
 * anything inside caller will be marked as props.childern
 */

function TitleBar(props) {
  return <div>{props.children}</div>;
}
