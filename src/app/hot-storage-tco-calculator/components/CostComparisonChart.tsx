import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  type LabelProps,
} from 'recharts';
import { Col, Row } from 'react-bootstrap';

const getThemeColors = () => {
  return {
    // Background colors
    petrol: 'var(--si-petrol, #0d1b29)',
    petrolCard: 'var(--si-petrol-card, #1a2d40)',

    // Brand colors
    royalBlue: 'var(--si-royal-blue, #3d5a9e)',
    lightBlue: 'var(--si-light-blue, #2adeff)',
    steelBlue: 'var(--si-steel-blue, #157bc9)',
    gold: 'var(--si-gold, #e5ae51)',

    // UI colors
    border: 'var(--si-border-color, rgba(255,255,255,0.08))',
    textPrimary: 'var(--si-body-color, #ffffff)',
    textMuted: 'var(--si-text-muted, rgba(255,255,255,0.45))',
    success: 'var(--si-success, #22c55e)',

    // 4 distinct chart segment colors — same for both AWS and Enigma bars
    chartStorage: 'var(--si-chart-storage,   #f97316)', 
    chartApi: 'var(--si-chart-api,       #3b82f6)', 
    chartRetrieval: 'var(--si-chart-retrieval, #a855f7)', 
    chartEgress: 'var(--si-chart-egress,    #e5ae51)', 
    chartAnnual: 'var(--si-chart-annual,    #22c55e)', 
  };
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface CostBreakdown {
  storageCost: number;
  apiFees: number;
  retrievalFees: number;
  egressFees: number;
  monthlyTotal: number;
  annualTotal: number;
}

interface CostComparisonChartProps {
  competitorCosts: CostBreakdown;
  enigmaCosts: CostBreakdown;
  competitor: 'aws' | 'google';
  currency: string;
  formatCurrency: (value: number, isEnigma?: boolean) => string;
  savings: {
    monthly: number;
    annual: number;
    percentage: number;
  };
  showMonthly?: boolean;
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
interface TooltipEntry {
  name: string;
  value: number;
  color: string;
  dataKey: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
  formatCurrency,
  colors,
}: {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string;
  formatCurrency: (value: number, isEnigma?: boolean) => string;
  colors: ReturnType<typeof getThemeColors>;
}) => {
  if (!active || !payload?.length) return null;
  const isEnigma = label?.toLowerCase().includes('enigma');

  return (
    <div
      style={{
        background: colors.petrolCard,
        border: `1px solid ${isEnigma ? colors.lightBlue : colors.gold}`,
        borderRadius: '12px',
        padding: '14px 18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
        minWidth: '220px',
      }}
    >
      <p
        style={{
          fontWeight: 800,
          fontSize: '11px',
          marginBottom: '10px',
          color: isEnigma ? colors.lightBlue : colors.gold,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontFamily: 'Manrope, sans-serif',
        }}
      >
        {label}
      </p>
      {payload.map((entry, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '6px',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '12px',
              color: colors.textMuted,
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            <span
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                background: entry.color,
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
            {entry.name}
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: '12px',
              color: colors.textPrimary,
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            {formatCurrency(entry.value, isEnigma)}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Total label above each bar ───────────────────────────────────────────────
interface CustomBarLabelProps extends LabelProps {
  total?: number;
  formatCurrency: (value: number, isEnigma?: boolean) => string;
  isEnigma?: boolean;
  colors: ReturnType<typeof getThemeColors>;
}

const CustomBarLabel = (props: CustomBarLabelProps) => {
  const { x = 0, y = 0, width = 0, total, formatCurrency, isEnigma, colors } = props;

  const xNum = typeof x === 'number' ? x : parseFloat(x as string) || 0;
  const yNum = typeof y === 'number' ? y : parseFloat(y as string) || 0;
  const widthNum = typeof width === 'number' ? width : parseFloat(width as string) || 0;

  if (!total || total === 0) return null;

  return (
    <text
      x={xNum + widthNum / 2}
      y={yNum - 10}
      fill={isEnigma ? colors.lightBlue : colors.gold}
      textAnchor="middle"
      fontWeight={800}
      fontSize={13}
      fontFamily="Manrope, sans-serif"
    >
      {formatCurrency(total, isEnigma)}
    </text>
  );
};

// ─── Card wrapper ─────────────────────────────────────────────────────────────
const ChartCard = ({
  title,
  subtitle,
  children,
  colors,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  colors: ReturnType<typeof getThemeColors>;
}) => (
  <div
    style={{
      background: colors.petrolCard,
      borderRadius: '16px',
      padding: '28px 24px 22px',
      border: `1px solid ${colors.border}`,
      boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
    }}
  >
    <h6
      style={{
        fontWeight: 800,
        marginBottom: '4px',
        color: colors.textPrimary,
        fontSize: '15px',
        fontFamily: 'Manrope, sans-serif',
        letterSpacing: '-0.01em',
      }}
    >
      {title}
    </h6>
    <p
      style={{
        color: colors.textMuted,
        fontSize: '12px',
        marginBottom: '22px',
        fontFamily: 'Manrope, sans-serif',
      }}
    >
      {subtitle}
    </p>
    {children}
  </div>
);

// ─── Stacked bar chart (reused for both Monthly and Annual) ───────────────────
const StackedBarChart = ({
  data,
  stackKeys,
  colorMap,
  formatCurrency,
  colors,
  height,
  barCategoryGap,
}: {
  data: Array<Record<string, unknown>>;
  stackKeys: readonly string[];
  colorMap: Record<string, string>;
  formatCurrency: (value: number, isEnigma?: boolean) => string;
  colors: ReturnType<typeof getThemeColors>;
  height: number;
  barCategoryGap?: string;
}) => {
  const axisStyle = { fontSize: 11, fill: colors.textMuted, fontFamily: 'Manrope, sans-serif' };
  const xAxisTick = {
    fontWeight: 700 as const,
    fontSize: 13,
    fill: colors.textPrimary,
    fontFamily: 'Manrope, sans-serif',
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        barCategoryGap={barCategoryGap ?? '38%'}
        margin={{ top: 34, right: 16, left: 8, bottom: 4 }}
      >
        <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.05)" vertical={false} />
        <XAxis dataKey="name" tick={xAxisTick} axisLine={false} tickLine={false} />
        <YAxis
          tickFormatter={v => formatCurrency(v)}
          tick={axisStyle}
          axisLine={false}
          tickLine={false}
          width={90}
        />
        <Tooltip
          content={<CustomTooltip formatCurrency={formatCurrency} colors={colors} />}
          cursor={{ fill: 'rgba(255,255,255,0.03)' }}
        />
        <Legend
          wrapperStyle={{
            fontSize: '12px',
            paddingTop: '16px',
            color: colors.textMuted,
            fontFamily: 'Manrope, sans-serif',
          }}
          iconType="circle"
          iconSize={8}
        />
        {stackKeys.map((key, i) => (
          <Bar
            key={key}
            dataKey={key}
            stackId="a"
            fill={colorMap[key]}
            radius={i === stackKeys.length - 1 ? [6, 6, 0, 0] : [0, 0, 0, 0]}
          >
            {i === stackKeys.length - 1 && (
              <LabelList
                content={(props: LabelProps) => {
                  const idx = props.index as number;
                  const row = data[idx] as { total?: number; isEnigma?: boolean };
                  return (
                    <CustomBarLabel
                      {...props}
                      total={row?.total}
                      formatCurrency={formatCurrency}
                      isEnigma={row?.isEnigma}
                      colors={colors}
                    />
                  );
                }}
              />
            )}
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const CostComparisonChart = ({
  competitorCosts,
  enigmaCosts,
  competitor,
  formatCurrency,
  showMonthly = true, // Default ON — monthly shown for reference per request
}: CostComparisonChartProps) => {
  const colors = getThemeColors();
  const competitorLabel = competitor === 'aws' ? 'AWS S3' : 'Google Cloud';

  // 4 distinct, clearly differentiated colors — same for both providers
  const SEGMENT_COLORS: Record<string, string> = {
    Storage: colors.chartStorage, // Orange
    'API Fees': colors.chartApi, // Blue
    Retrieval: colors.chartRetrieval, // Purple
    Egress: colors.chartEgress, // Gold
  };

  const stackKeys = ['Storage', 'API Fees', 'Retrieval', 'Egress'] as const;

  // Monthly stacked data
  const monthlyData = [
    {
      name: competitorLabel,
      Storage: competitorCosts.storageCost,
      'API Fees': competitorCosts.apiFees,
      Retrieval: competitorCosts.retrievalFees,
      Egress: competitorCosts.egressFees,
      total: competitorCosts.monthlyTotal,
      isEnigma: false,
    },
    {
      name: 'Enigma',
      Storage: enigmaCosts.storageCost,
      'API Fees': enigmaCosts.apiFees,
      Retrieval: enigmaCosts.retrievalFees,
      Egress: enigmaCosts.egressFees,
      total: enigmaCosts.monthlyTotal,
      isEnigma: true,
    },
  ];

  // Annual stacked data — multiply each component × 12

  return (
    <Row className="g-4 pb-5">
      {/* ── Monthly Stacked ── */}
      {showMonthly && (
        <Col xs={12} md={12}>
          <ChartCard
            title="Monthly Cost Breakdown"
            subtitle="Total monthly spend by cost category"
            colors={colors}
          >
            <StackedBarChart
              data={monthlyData}
              stackKeys={stackKeys}
              colorMap={SEGMENT_COLORS}
              formatCurrency={formatCurrency}
              colors={colors}
              height={375}
              barCategoryGap="38%"
            />
          </ChartCard>
        </Col>
      )}

      {/* ── Annual Stacked ── */}
      {/* <Col xs={12} md={showMonthly ? 6 : 12}>
        <ChartCard
          title="Annual Cost Comparison"
          subtitle="Total yearly spend by cost category"
          colors={colors}
        >
          <StackedBarChart
            data={annualData}
            stackKeys={stackKeys}
            colorMap={SEGMENT_COLORS}
            formatCurrency={formatCurrency}
            colors={colors}
            height={showMonthly ? 280 : 340}
            barCategoryGap={showMonthly ? '42%' : '35%'}
          />

       
          {savings.annual > 0 && (
            <div
              style={{
                marginTop: showMonthly ? '20px' : '32px',
                background:
                  'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)',
                borderRadius: '12px',
                padding: showMonthly ? '16px 20px' : '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: `1px solid ${colors.success}33`,
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: 800,
                    color: colors.success,
                    margin: '0 0 3px',
                    fontSize: showMonthly ? '14px' : '16px',
                    fontFamily: 'Manrope, sans-serif',
                  }}
                >
                  💰 Annual savings with Enigma
                </p>
                <p
                  style={{
                    color: `${colors.success}A6`,
                    margin: 0,
                    fontSize: showMonthly ? '12px' : '13px',
                    fontFamily: 'Manrope, sans-serif',
                  }}
                >
                  {savings.percentage.toFixed(1)}% cheaper than{' '}
                  {competitor === 'aws' ? 'AWS' : 'Google Cloud'}
                </p>
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: showMonthly ? '24px' : '28px',
                  color: colors.success,
                  fontFamily: 'Manrope, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {formatCurrency(savings.annual, false)}
              </div>
            </div>
          )}
        </ChartCard>
      </Col> */}
    </Row>
  );
};

export default CostComparisonChart;
