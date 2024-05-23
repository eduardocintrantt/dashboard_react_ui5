import {
    Avatar,
    Card,
    CardHeader,
    Text,
    ShellBar,
    ShellBarItem,
    List,
    StandardListItem,
    CustomListItem,
    ValueState,
    ProgressIndicator,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
  } 
from "@ui5/webcomponents-react";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyCustomElement } from "./MyCustomElement";

// ICONS IMPORTED
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100)
      }
    };
  });
  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Friend Name",
      accessor: "friend.name"
    },
    {
      Header: "Friend Age",
      accessor: "friend.age"
    }
  ];

const dataset = [
    {
      month: "January",
      data: 65
    },
    {
      month: "February",
      data: 59
    },
    {
      month: "March",
      data: 80
    },
    {
      month: "April",
      data: 81
    },
    {
      month: "May",
      data: 56
    },
    {
      month: "June",
      data: 55
    },
    {
      month: "July",
      data: 40
    }
  ];

export function Home() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);

    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setToggleCharts("barChart");
              }, 
            1000);
        } else {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setToggleCharts("lineChart");
            }, 
            1000);
        }
      };

    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
    const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

    const navigate = useNavigate();
    const handleProgressHeaderClick = () => {
        navigate("/detail");
    };

    return (
        <>
            <MyCustomElement />
            <FlexBox
                    justifyContent={FlexBoxJustifyContent.Center}
                    wrap={FlexBoxWrap.Wrap}
                    style={spacing.sapUiContentPadding}
                >

                {/* First Card */}
                <Card 
                    header={
                        <CardHeader 
                            titleText="Stock Prices" 
                            subtitleText={`Click here to switch to ${switchToChart}`}
                            interactive 
                            onClick={handleHeaderClick}
                            avatar={<Icon name={toggleCharts === "lineChart" ? lineChartIcon : barChartIcon} />}
                        />
                    } 
                    style={{ width: '300px', ...spacing.sapUiContentPadding }}>

                    <Text style={spacing.sapUiContentPadding}>
                        {contentTitle}
                    </Text>
                    
                    { toggleCharts === "lineChart" ? (
                        <LineChart
                            dimensions={[{ accessor: "month" }]}
                            measures={[{ accessor: "data", label: "Stock Price" }]}
                            dataset={dataset}
                            loading={loading}
                        />  
                    ) : (
                        <BarChart
                            dimensions={[{ accessor: "month" }]}
                            measures={[{ accessor: "data", label: "Stock Price" }]}
                            dataset={dataset}
                            loading={loading}
                        />
                    )}
                </Card>

                {/* Second Card     */}
                <Card header={
                    <CardHeader 
                        titleText="Progress"
                        subtitleText="List"
                        avatar={<Icon name={listIcon} />}
                        interactive
                        onClick={handleProgressHeaderClick}
                    />
                }
                style={{ width: "300px", ...spacing.sapUiContentPadding }}
                >
                    <List>
                        <StandardListItem additionalText="finished" additionalTextState={ValueState.Success}>Activity 1</StandardListItem>
                        
                        <CustomListItem>
                            <FlexBox direction={FlexBoxDirection.Column} style={{ width: "100%", ...spacing.sapUiTinyMarginTopBottom }}>
                                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                                    <Text style={{ fontSize: ThemingParameters.sapFontLargeSize  }}>
                                        Activity 2
                                    </Text>
                                    <Text style={{ color: ThemingParameters.sapWarningColor }}>
                                        in progress
                                    </Text>
                                </FlexBox>
                                <ProgressIndicator 
                                    value={5} 
                                    valueState={ValueState.Error} 
                                    style={{ ...spacing.sapUiTinyMarginTop }}
                                />
                            </FlexBox>
                        </CustomListItem>

                        <StandardListItem additionalText="finished" additionalTextState={ValueState.Success}>Activity 3</StandardListItem>
                        <StandardListItem>Activity 4</StandardListItem>
                        <StandardListItem>Activity 5</StandardListItem>
                        <StandardListItem>Activity 6</StandardListItem>
                        
                        <CustomListItem>
                            <FlexBox 
                                direction={FlexBoxDirection.Column}
                                style={{ width: "100%", ...spacing.sapUiSmallMarginTopBottom }}
                            >
                            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                                <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                                    Activity 3
                                </Text>
                                <Text style={{ color: ThemingParameters.sapWarningColor }}>
                                    In progress
                                </Text>
                            </FlexBox>
                                <ProgressIndicator 
                                    value={89} 
                                    valueState={ValueState.Success} 
                                    style={{ ...spacing.sapUiTinyMarginTop }}
                                />
                            </FlexBox>
                        </CustomListItem>

                        <StandardListItem>Activity 8</StandardListItem>
                        <StandardListItem additionalText="finished" additionalTextState={ValueState.Success}>Activity 9</StandardListItem>
                        <StandardListItem>Activity 10</StandardListItem>
                        <StandardListItem additionalText="failed" additionalTextState={ValueState.Error}>Activity 11</StandardListItem>
                        <StandardListItem>Activity 12</StandardListItem>
                    </List>
                </Card>

                {/* Third Card */}
                <Card
                    header={
                        <CardHeader 
                            titleText="Analytical Table"
                            avatar={ <Icon name={tableViewIcon} /> }
                        />
                    }
                    style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
                >
                    <AnalyticalTable 
                        data={tableData} 
                        columns={tableColumns}
                        groupable
                        filterable
                    />
                </Card>

            </FlexBox>
        </>
        
    )
  }
  