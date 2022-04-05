<script lang="ts">
  import { openEHR } from "./OpenehrStore";
  import CompositionFactory from "./compositionFactory";

  const aql = `
          select 
              c/context/start_time/value as start_time,
              c/name/value as name
          from composition c 
          order by c/context/start_time/value desc 
          limit $count
      `;

  const weight_aql = `select
a_a/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude,
a_a/data[at0002]/events[at0003]/time/value
from
composition a
contains observation a_a[openEHR-EHR-OBSERVATION.body_weight.v*]
order by a_a/data[at0002]/events[at0003]/time/value desc`;

  var queryParams = {};
  queryParams.count = 25;

  //   function postComposition() {
  //     $openEHR.compose(new CompositionFactory().getComposition());
  //   }

  function postComposition() {
    $openEHR.compose(new CompositionFactory().getComposition(), -1502, 1002160);
  }
</script>

<div>
  <h1>Last 25 compositions</h1>
  <div>
    <button on:click={postComposition}> Post Composition </button>
  </div>
  <div>
    {#await $openEHR.query(aql, queryParams)}
      Loading...
    {:then result}
      <table>
        <thead>
          <tr>
            <th>Start time</th>
            <th>Name</th>
          </tr>
        </thead>
        {#each result.rows as row}
          <tr>
            <td>{row.items[0]}</td><td>{row.items[1]}</td>
          </tr>
        {/each}
      </table>
    {:catch error}
      Failed to load compositions {error}
    {/await}
  </div>
</div>
