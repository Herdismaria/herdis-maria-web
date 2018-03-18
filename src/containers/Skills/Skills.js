import React, { Component } from "react";
import styled from "styled-components";

const SkillsWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const leftWrapper = styled.div`
  height: 100%;
`;

const rightWrapper = styled.div`
  height: 100%;
`;

class Skills extends Component {
  componentDidMount() {
    // wait until page has finished mounting to show content
    setTimeout(this.props.hideSlider, 300);
  }
  render() {
    return (
      <SkillsWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          sem ac tortor pretium blandit faucibus ut nisl. Aliquam sit amet lorem
          a est pulvinar ornare. Suspendisse purus risus, elementum id tincidunt
          nec, vulputate nec nisi. Sed ac orci sit amet lectus tincidunt
          convallis. Ut eu nunc non nibh varius aliquam. Aliquam eget congue
          nunc. Aliquam vel turpis consequat, fringilla nisi et, elementum
          tortor. Fusce nisi enim, feugiat sed augue id, pulvinar luctus est.
          Nullam gravida, velit nec dapibus volutpat, ex felis mollis orci, et
          rhoncus eros massa quis ex. Donec non velit eu sapien eleifend
          consectetur. Donec eu nibh ornare, elementum tellus ut, dictum purus.
          Suspendisse posuere lectus at euismod placerat. Pellentesque porta
          enim ut tristique congue. Ut eu molestie orci. Proin varius, urna vel
          imperdiet consequat, dui tellus commodo arcu, ac rutrum quam massa ut
          odio. Donec nec gravida elit, ac egestas mi. Vivamus porta erat eget
          rutrum pretium. Cras sed eleifend nibh, sit amet ullamcorper lacus.
          Integer egestas bibendum arcu quis eleifend. Praesent condimentum
          neque quis sagittis ultricies. Morbi id turpis eu odio rutrum
          tincidunt in finibus arcu. Sed mattis tincidunt felis, sit amet
          malesuada massa tincidunt in. Phasellus at magna blandit, viverra
          neque feugiat, convallis quam. Phasellus consectetur libero libero, et
          suscipit quam ultricies nec. Sed nibh orci, luctus a justo in,
          porttitor ultricies nibh. Mauris a convallis enim. Cras congue
          porttitor vestibulum. Nullam ornare justo leo, vel rutrum velit
          faucibus sollicitudin. Ut id cursus augue, sit amet tincidunt libero.
          Quisque dapibus eleifend lectus ac sollicitudin. Mauris scelerisque
          felis eu sem luctus, facilisis malesuada tortor condimentum. Proin sit
          amet velit vitae nulla mattis suscipit at quis eros. Morbi elementum
          sem euismod accumsan consectetur. Duis feugiat vestibulum fermentum.
          Phasellus lobortis sagittis commodo. Donec pharetra gravida malesuada.
          Quisque hendrerit congue purus sit amet dignissim. Maecenas hendrerit
          dolor sed libero lobortis, ac vestibulum nunc porttitor. Curabitur
          aliquam fringilla varius. Fusce ullamcorper imperdiet pulvinar.
          Curabitur aliquam justo arcu, vitae pulvinar nulla laoreet eget.
          Aenean viverra feugiat venenatis. Etiam nec magna faucibus sem
          sollicitudin pellentesque. Sed sagittis ut mauris vitae accumsan. Ut
          eget vulputate erat. Aenean vel dapibus arcu. Sed auctor dapibus
          augue, eget lobortis lorem dictum non. Cras blandit eros sem, ac
          sollicitudin quam gravida vel. Quisque non augue sed libero fermentum
          sodales. Aenean sapien massa, tempus id dictum placerat, fringilla
          convallis metus. Fusce vel pharetra metus, eu varius lorem. Phasellus
          viverra vulputate metus vitae imperdiet. Etiam finibus nibh vel
          viverra facilisis. Nullam condimentum nunc ut sapien sodales, eu
          gravida enim mattis. Proin bibendum nulla nec leo lacinia pretium.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla placerat eget sem vestibulum ornare.
          Fusce sodales diam ac facilisis luctus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla quis sem ac tortor pretium blandit
          faucibus ut nisl. Aliquam sit amet lorem a est pulvinar ornare.
          Suspendisse purus risus, elementum id tincidunt nec, vulputate nec
          nisi. Sed ac orci sit amet lectus tincidunt convallis. Ut eu nunc non
          nibh varius aliquam. Aliquam eget congue nunc. Aliquam vel turpis
          consequat, fringilla nisi et, elementum tortor. Fusce nisi enim,
          feugiat sed augue id, pulvinar luctus est. Nullam gravida, velit nec
          dapibus volutpat, ex felis mollis orci, et rhoncus eros massa quis ex.
          Donec non velit eu sapien eleifend consectetur. Donec eu nibh ornare,
          elementum tellus ut, dictum purus. Suspendisse posuere lectus at
          euismod placerat. Pellentesque porta enim ut tristique congue. Ut eu
          molestie orci. Proin varius, urna vel imperdiet consequat, dui tellus
          commodo arcu, ac rutrum quam massa ut odio. Donec nec gravida elit, ac
          egestas mi. Vivamus porta erat eget rutrum pretium. Cras sed eleifend
          nibh, sit amet ullamcorper lacus. Integer egestas bibendum arcu quis
          eleifend. Praesent condimentum neque quis sagittis ultricies. Morbi id
          turpis eu odio rutrum tincidunt in finibus arcu. Sed mattis tincidunt
          felis, sit amet malesuada massa tincidunt in. Phasellus at magna
          blandit, viverra neque feugiat, convallis quam. Phasellus consectetur
          libero libero, et suscipit quam ultricies nec. Sed nibh orci, luctus a
          justo in, porttitor ultricies nibh. Mauris a convallis enim. Cras
          congue porttitor vestibulum. Nullam ornare justo leo, vel rutrum velit
          faucibus sollicitudin. Ut id cursus augue, sit amet tincidunt libero.
          Quisque dapibus eleifend lectus ac sollicitudin. Mauris scelerisque
          felis eu sem luctus, facilisis malesuada tortor condimentum. Proin sit
          amet velit vitae nulla mattis suscipit at quis eros. Morbi elementum
          sem euismod accumsan consectetur. Duis feugiat vestibulum fermentum.
          Phasellus lobortis sagittis commodo. Donec pharetra gravida malesuada.
          Quisque hendrerit congue purus sit amet dignissim. Maecenas hendrerit
          dolor sed libero lobortis, ac vestibulum nunc porttitor. Curabitur
          aliquam fringilla varius. Fusce ullamcorper imperdiet pulvinar.
          Curabitur aliquam justo arcu, vitae pulvinar nulla laoreet eget.
          Aenean viverra feugiat venenatis. Etiam nec magna faucibus sem
          sollicitudin pellentesque. Sed sagittis ut mauris vitae accumsan. Ut
          eget vulputate erat. Aenean vel dapibus arcu. Sed auctor dapibus
          augue, eget lobortis lorem dictum non. Cras blandit eros sem, ac
          sollicitudin quam gravida vel. Quisque non augue sed libero fermentum
          sodales. Aenean sapien massa, tempus id dictum placerat, fringilla
          convallis metus. Fusce vel pharetra metus, eu varius lorem. Phasellus
          viverra vulputate metus vitae imperdiet. Etiam finibus nibh vel
          viverra facilisis. Nullam condimentum nunc ut sapien sodales, eu
          gravida enim mattis. Proin bibendum nulla nec leo lacinia pretium.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla placerat eget sem vestibulum ornare.
          Fusce sodales diam ac facilisis luctus.
        </p>
      </SkillsWrapper>
    );
  }
}

export default Skills;
