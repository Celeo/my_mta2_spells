import React from 'react'

const CastingRules = (props) => {
  return (
    <div>
      <h4>Practices</h4>
      <hr />
      <h5>Initiate (1)</h5>
      <ul>
        <li>Compelling - push a preferred possible outcome</li>
        <li>Knowing - gain information on something</li>
        <li>Unveiling - expose hidden things</li>
      </ul>
      <h5>Apprentice (2)</h5>
      <ul>
        <li>Ruling - push a preferred impossible outcome</li>
        <li>Shielding - pretect against something</li>
        <li>Veiling - hide something</li>
      </ul>
      <h5>Disciple (3)</h5>
      <ul>
        <li>Fraying - degrade something</li>
        <li>Perfecting - bolster something</li>
        <li>Weaing - alter something without completely transforming</li>
      </ul>
      <h5>Adept (4)</h5>
      <ul>
        <li>Patterning - completely transform something</li>
        <li>Unraveling - significantly damage something</li>
      </ul>
      <h5>Master (5)</h5>
      <ul>
        <li>Making - make something from nothing</li>
        <li>Unmaking - completely destroy something</li>
      </ul>
      <div className="spacer-medium" />
      <h4>Gnosis</h4>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Casting bonus</th>
            <th>Ritual Interval</th>
            <th>Trait Max</th>
            <th>Yantras/spell</th>
            <th>Paradox/reach</th>
            <th>Combined spells</th>
            <th>Obsessions</th>
            <th>Mana max</th>
            <th>Mana/turn</th>
            <th>Highest arcanum max</th>
            <th>Other arcanum max</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>1</td><td>3 hrs</td><td>5</td><td>2</td><td>1</td><td>-</td><td>1</td><td>10</td><td>1</td><td>3</td><td>2</td></tr>
          <tr><td>2</td><td>2</td><td>3 hrs</td><td>5</td><td>2</td><td>1</td><td>-</td><td>1</td><td>11</td><td>2</td><td>3</td><td>3</td></tr>
          <tr><td>3</td><td>3</td><td>1 hr</td><td>5</td><td>3</td><td>2</td><td>2</td><td>2</td><td>12</td><td>3</td><td>4</td><td>3</td></tr>
          <tr><td>4</td><td>4</td><td>1 hr</td><td>5</td><td>3</td><td>2</td><td>2</td><td>2</td><td>13</td><td>4</td><td>4</td><td>4</td></tr>
          <tr><td>5</td><td>5</td><td>30 min</td><td>5</td><td>4</td><td>3</td><td>3</td><td>2</td><td>14</td><td>5</td><td>5</td><td>4</td></tr>
          <tr><td>6</td><td>6</td><td>30 min</td><td>6</td><td>4</td><td>3</td><td>3</td><td>3</td><td>20</td><td>6</td><td>5</td><td>5</td></tr>
          <tr><td>7</td><td>7</td><td>10 min</td><td>7</td><td>5</td><td>4</td><td>3</td><td>3</td><td>25</td><td>7</td><td>5</td><td>5</td></tr>
          <tr><td>8</td><td>8</td><td>10 min</td><td>8</td><td>5</td><td>4</td><td>3</td><td>3</td><td>30</td><td>8</td><td>5</td><td>5</td></tr>
          <tr><td>9</td><td>9</td><td>1 min</td><td>9</td><td>6</td><td>5</td><td>4</td><td>4</td><td>50</td><td>10</td><td>5</td><td>5</td></tr>
          <tr><td>10</td><td>10</td><td>1 min</td><td>10</td><td>6</td><td>5</td><td>4</td><td>4</td><td>75</td><td>15</td><td>5</td><td>5</td></tr>
        </tbody>
      </table>
      <div className="spacer-medium" />
      <h4>Mana</h4>
      <hr />
      <p>Max mana is set by Gnosis.</p>
      <p>
        Spending mana:
        <ul className="collection">
          <li className="collection-item">{`Casting a spell not in the path's ruling Arcana`}</li>
          <li className="collection-item">Reduce Paradox by one dice per point when casting</li>
          <li className="collection-item">Activating an Attainment</li>
          <li className="collection-item">Some spells require additional mana</li>
          <li className="collection-item">Some Legacy Attainments</li>
          <li className="collection-item">Healing - spend 3 mana to heal 1 level of either lethal or bashing or to remove a mental condition without gaining a beat or physical tilt</li>
        </ul>
      </p>
      <p>
        Gaining mana:
        <ul className="collection">
          <li className="collection-item">Meditation at a Hallow with Gnosis + Composure roll taking 1 hour</li>
          <li className="collection-item">Channel Mana spell with Prime 3</li>
          <li className="collection-item">Consuming tass from a Hallow</li>
          <li className="collection-item">Fulfilling an Obsession</li>
          <li className="collection-item">Scour patern - reduce a physical attribute by 1 for 24 hours or take 1 resistant lethal wound to restore 3 mana, a number of times per day based on Gnosis</li>
          <li className="collection-item">Get mana from another mage with Prime</li>
          <li className="collection-item">Blood sacrifice</li>
        </ul>
      </p>
      <div className="spacer-medium" />
      <h4>Hubris and Wisdom</h4>
      <hr />
      <p>
        Wisdom 8-10, High / Enlightened - 5 dice<br />
        Wisdom 4-7, Medium / Understanding - 3 dice<br />
        Wisdom 8-10, Low / Falling - 1 dice<br />
        Wisdom 0 characters are converted to NPCs
      </p>
      <div className="spacer-medium" />
      <h4>Mage Sight</h4>
      <hr />
      <h5>Peripheral</h5>
      <p>Always active. The mage sees the world through the lens of their Path. Reveals active supernatural effects not intended to be hidden.</p>
      <h5>Active</h5>
      <p>
        {`
          Requires activation as a reflexive action. Automatically uses the mage's two path ruling arcana and costs 1 mana to include a common or inferior arcanum for a scene.
          Reveals all active supernatural effects within the mage's normal senses, as well as spells as they are being cast. Casting shows the mage's Nimbus and the formed Imago.
          Some targets can still be hidden from the mage with concealment magic, which causes a Clash of Wills. Causes a -2 modifier to all actions when active to rolls not related
          to magic. Can only be active for a number of minus equal to Gnosis per scene, after which a point of Willpower can be used to keep it up for the rest of the scene.
        `}
      </p>
      <h5>Focused</h5>
      <p>
        {`
          Requires all of the mage's attention as they focus on a single thing. Anything with the ability to see magic knows that the mage is using this sight. Comes in 2 stages:
          Scrutiny and Revelation. Revelation is a quick glance that gives some information, resisted by the Opacity. Scrutiny is the process of picking apart the Opacity to gain
          all knowledge about the target, and is dangerous and time-consuming.
        `}
      </p>
      <br />
      <p>
        Revelation is an instant action that can be taken at any time. Roll Gnosis + Arcanum - Opacity.
      </p>
      <table>
        <thead>
          <tr>
            <th>Roll result</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dramatic Failure</td>
            <td>No mage can investigate the target for 24 hours without using the Prime spell Cleanse Pattern</td>
          </tr>
          <tr>
            <td>Failure</td>
            <td>The mage is unable to reveal anything about the subject, but can still Scrutinize</td>
          </tr>
          <tr>
            <td>Success</td>
            <td>The mage discovers the surface information</td>
          </tr>
          <tr>
            <td>Exceptional Success</td>
            <td>The mage discovers the surface information and can either lower the Opacity by 1 or uncover 1 piece of deep information</td>
          </tr>
        </tbody>
      </table>
      <p>
        {`
          Scrutiny requires spending a point of Willpower. While Scrutinizing, all non-magic rolls are made at -3. Clash of Wills may apply if the target
          is being magically concealed. Scrutiny is an extended action where the mage rolls Gnosis + Arcanum once per turn. Every time that the mage gets
          a number of successes equal to or higher than the Opacity over any number of rounds, the Opacity is reduced by 1. After a number of rolls equal
          to Gnosis + Arcanum, the mage's magic starts to leak into the mystery, which means that every time the mage fails a Scrutiny roll after this
          point, add half the mage's Gnosis, rounded up, to the Opacity, which applies to all mages investigating the mystery in the future. The mage can
          spend mana during this Scrutiny process to add 1 success to that turn's roll as long as it already succeeded, up to a number of times equal to
          the limit of the mage's Gnosis.
        `}
      </p>
      <table>
        <thead>
          <tr>
            <th>Roll result</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dramatic Failure</td>
            <td>{`Opacity increases by 2. If the mage has already made a number of rolls equal to Gnosis + Arcanum, a Supernal entity of the mage's Path notices the mage`}</td>
          </tr>
          <tr>
            <td>Failure</td>
            <td>Nothing happens with Opacity. If the mage has already made a number of rolls equal to Gnosis + Arcanum, Opacity increases by Gnosis / 2 (round up)</td>
          </tr>
          <tr>
            <td>Success</td>
            <td>
              Mage can choose to spend 1 mana to increase successes by 1. If the rolling number of successes equals the Opacity, the Opacity is reduced by 1 and successes reset to 0.
              The mage can choose to stop Scrutinizing the mystery and pick up where they left off at a later time.
            </td>
          </tr>
          <tr>
            <td>Exceptional Success</td>
            <td>
              Apply the effect of a normal Success. Additionally, the mage may do one of the following instead of the normal Exceptional Success effects: apply all successes accrued even
              if it lowers the Opacity by more than one, or spend a point of mana to add Gnosis to Opacity for other mages, or spend a point of mana to remove their Nimbus from the area.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CastingRules
